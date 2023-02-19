from app.models import db, Session
from app.routes.utils import getAll, getById

from flask import Blueprint, request
from flask_login import login_required, current_user

import datetime

session = Blueprint("sessions", __name__, url_prefix="/sessions")

#
# GET
#

# Get all sessions
@session.route("", methods=["GET"])
@login_required
def getSessions():
	filters = []

	courses = [int(c) for c in list(dict.fromkeys(request.args.getlist("course", type=str)))]
	print(courses)
	if len(courses) > 0:
		filters.append(Session.course_id.in_(courses))
	upcoming = request.args.get("upcoming", default="", type=str).lower()
	if upcoming:
		if upcoming not in ["true", "1", "false", "0"]:
			return {"error": f"'{upcoming}' is not a valid value for upcoming (boolean)"}, 400
		filters.append(Session.date >= datetime.date.today())
	completed = request.args.get("completed", default="", type=str).lower()
	if completed:
		if completed not in ["true", "1", "false", "0"]:
			return {"error": f"'{completed}' is not a valid value for completed (boolean)"}, 400
		filters.append(Session.is_completed == (completed in [True, "true", "1"]))
	enrolled = request.args.get("enrolled", default="", type=str).lower()
	if enrolled:
		if enrolled not in ["true", "1", "false", "0"]:
			return {"error": f"'{enrolled}' is not a valid value for enrolled (boolean)"}, 400
		filters.append(Session.id.in_([s.id for s in current_user.sessions]))

	if current_user.is_tutor:
		teaching = request.args.get("teaching", default="", type=str).lower()
		if teaching:
			if teaching not in ["true", "1", "false", "0"]:
				return {"error": f"'{teaching}' is not a valid value for teaching (boolean)"}, 400
			filters.append(Session.tutor_id == current_user.id)

		mycourses = request.args.get("mycourses", default="", type=str).lower()
		if mycourses:
			if mycourses not in ["true", "1", "false", "0"]:
				return {"error": f"'{mycourses}' is not a valid value for mycourses (boolean)"}, 400
			filters.append(Session.course_id.in_([c.id for c in current_user.tutorCourses]))

		mytime = request.args.get("mytime", default="", type=str).lower()
		if mytime:
			if mytime not in ["true", "1", "false", "0"]:
				return {"error": f"'{mytime}' is not a valid value for mytime (boolean)"}, 400
			if mytime in ["true", "1"]:
				pass # TODO

	return getAll(Session, filters=tuple(filters))

# Get session by id
@session.route("/<id>", methods=["GET"])
def getSessionById(id):
	return getById(Session, id)

#
# PUT
#

# Teach a session
@session.route("/<id>/teach", methods=["PUT"])
@login_required
def teachSession(id):
	session = Session.query.get(id)

	if not session:
		return {"message": "Session not found"}, 404

	if not current_user.is_tutor:
		return {"message": "You are not a tutor"}, 403

	if session.tutor_id:
		return {"message": "Session already has a tutor"}, 400

	session.tutor_id = current_user.id
	db.session.commit()

	return {"message": "Session taught successfully"}, 200

#
# POST
#

# Create a session
@session.route("", methods=["POST"])
@login_required
def createSession():
	course_id = request.json.get("course_id")
	date = datetime.datetime.strptime(request.json.get("date"), "%Y-%m-%d").date()
	start_time = request.json.get("start_time")
	end_time = request.json.get("end_time")
	location = request.json.get("location")
	description = request.json.get("description")

	if not (start_time and start_time.isdigit() and 0 <= int(start_time) <= 24):
		return {"message": "Invalid start_time, use 24-hour time"}, 400
	if not (end_time and end_time.isdigit() and 0 <= int(end_time) <= 24):
		return {"message": "Invalid end_time, use 24-hour time"}, 400

	session = Session(course_id, date, start_time, end_time, location, description)

	db.session.add(session)
	db.session.commit()

	return {"message": "Session created successfully"}, 201
