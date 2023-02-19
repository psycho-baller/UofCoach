from app import db
from app.models import User, Availability
from app.routes.utils import getAll, getById

from flask import Blueprint, request, jsonify


tutor = Blueprint("tutor", __name__, url_prefix="/tutors")



#
# POST
#

# Add availability slot
@tutor.route("/availability", methods=["POST"])
def addAvailabilitySlot():
	data = request.json
	tutor_id = data.get("tutor_id")
	day_of_week = data.get("day_of_week")
	hour = data.get("hour")
	

	# Check if tutor_id exists
	tutor = User.query.filter_by(user_id=tutor_id, is_tutor=True).first()
	if not tutor:
		return jsonify({"message": "Tutor not found."}), 404

	# Check if day_of_week is valid
	if not 0 <= day_of_week <= 6:
		return jsonify({"message": "Invalid day_of_week."}), 400

	# Check if start_time is before end_time
	if not 0 <= hour <= 24:
		return jsonify({"message": "use 24-hour time."}), 400

	# Create availability slot
	slot = Availability(tutor_id=tutor_id, day_of_week=day_of_week,hour=hour)

	# Add availability slot to database
	db.session.add(slot)
	db.session.commit()

	return jsonify({"message": "Availability slot added successfully."}), 201

#
# DELETE
#

# Delete availability slot
@tutor.route("/availability/<int:slot_id>", methods=["DELETE"])
def deleteAvailabilitySlot(slot_id):
    # Check if availability slot exists
    slot = Availability.query.get(slot_id)
    if not slot:
        return jsonify({"message": "Availability slot not found."}), 404

    # Delete availability slot from database
    db.session.delete(slot)
    db.session.commit()

    return jsonify({"message": "Availability slot deleted successfully."}), 200