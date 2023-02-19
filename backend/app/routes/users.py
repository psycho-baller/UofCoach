from app.models import db, User, Tutorcourse, Availability
from app.routes.utils import getAll, getById

from flask import Blueprint, request
from flask_login import login_required, current_user

import requests

user = Blueprint("users", __name__, url_prefix="/users")

#
# GET
#

# Get all users
@user.route("", methods=["GET"])
@login_required
def getUsers(tutor : bool = None):
	filters = []

	if tutor is None:
		tutor = request.args.get("tutor", default=None, type=str).lower()
	if tutor is not None:
		if tutor not in [True, False, "true", "1", "false", "0"]:
			return {"error": f"'{tutor}' is not a valid value for tutor (boolean)"}, 400
		filters.append(User.is_tutor == (tutor in [True, "true", "1"]))

	courses = list(dict.fromkeys(request.args.getlist("course", type=int)))
	if len(courses) > 0:
		filters.append(Tutorcourse.course_id.in_(courses))

	return getAll(User, tuple(filters))

# Get all tutors
@user.route("/tutors", methods=["GET"])
@login_required
def getTutors():
	return getUsers(tutor=True)

# Get user by id
@user.route("/<id>", methods=["GET"])
@login_required
def getUserById(id):
	return getById(User, id)

# Get current user
@user.route("/me", methods=["GET"])
@login_required
def getCurrentUser():
	return getById(User, current_user.id)

# Get current user's availability
@user.route("/me/availability", methods=["GET"])
@login_required
def getCurrentUserAvailability():
	if not current_user.is_tutor:
		return {"message": "User is not a tutor."}, 400

	return {
		d : [slot.hour for slot in current_user.availabilitySlots if slot.day == d] for d in range(7)
	}, 200

# Get current user's teaching courses
@user.route("/me/courses", methods=["GET"])
@login_required
def getCurrentUserCourses():
	if not current_user.is_tutor:
		return {"message": "User is not a tutor."}, 400

	return [c.course_id for c in current_user.tutorCourses], 200

#
# PUT
#

# Convert user to tutor
@user.route("/me/maketutor", methods=["PUT"])
@login_required
def makeTutor():
	user = User.query.get(current_user.id)
	user.is_tutor = True
	db.session.commit()
	return {"message": "User converted to tutor successfully."}, 200

#
# POST
#

# Add availability slot
@user.route("/me/availability", methods=["POST"])
@login_required
def addAvailabilitySlot():
	day = request.json.get("day")
	hour = request.json.get("hour")

	if not current_user.is_tutor:
		return {"message": "User is not a tutor."}, 400

	# Check if day_of_week is valid
	if not (day and day.isdigit() and 0 <= int(day) <= 6):
		return {"message": "Invalid day of week"}, 400

	# Check if start_time is before end_time
	if not (hour and hour.isdigit() and 0 <= int(hour) <= 24):
		return {"message": "Invalid hour, use 24-hour time"}, 400

	if Availability.query.filter_by(tutor_id=current_user.id, day=day, hour=hour).first():
		return {"message": "Availability slot already exists."}, 400

	# Create availability slot
	slot = Availability(current_user.id, day, hour)

	# Add availability slot to database
	db.session.add(slot)
	db.session.commit()

	return {"message": "Availability slot added successfully."}, 201

# Add teaching course
@user.route("/me/courses", methods=["POST"])
@login_required
def addTutorCourse():
	course_id = request.json.get("course_id")

	if not current_user.is_tutor:
		return {"message": "User is not a tutor."}, 400

	if not course_id:
		return {"message": "Missing course_id"}, 400

	if Tutorcourse.query.filter_by(tutor_id=current_user.id, course_id=course_id).first():
		return {"message": "Course already added."}, 400

	# Check if course exists
	r = requests.get("https://www.uofcourse.com/api/courses/" + course_id)
	if r.status_code != 200:
		return {"message": "Course not found."}, 404

	# Create tutorcourse
	tutorcourse = Tutorcourse(current_user.id, int(course_id))
	db.session.add(tutorcourse)
	db.session.commit()

	return {"message": "Course added successfully."}, 201

#
# DELETE
#

# Delete availability slot
@user.route("/me/availability", methods=["DELETE"])
@login_required
def deleteAvailabilitySlot():
	day = request.json.get("day")
	hour = request.json.get("hour")

	if not current_user.is_tutor:
		return {"message": "User is not a tutor."}, 400

	# Check if availability slot exists
	slot = Availability.query.filter_by(tutor_id=current_user.id, day=day, hour=hour).first()
	if not slot:
		return {"error": "Availability slot not found."}, 404

	# Delete availability slot from database
	db.session.delete(slot)
	db.session.commit()

	return {"message": "Availability slot deleted successfully"}, 200
