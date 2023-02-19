from app import db
from app.models import User, Availability

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
	tutor = User.query.get(tutor_id)
	if not tutor:
		return {"message": "User not found."}, 404
	if not tutor.is_tutor:
		return {"message": "User is not a tutor."}, 400

	# Check if day_of_week is valid
	if not 0 <= day_of_week <= 6:
		return {"message": "Invalid day_of_week."}, 400

	# Check if start_time is before end_time
	if not 0 <= hour <= 24:
		return {"message": "use 24-hour time."}, 400

	# Create availability slot
	slot = Availability(tutor_id=tutor_id, day_of_week=day_of_week,hour=hour)

	# Add availability slot to database
	db.session.add(slot)
	db.session.commit()

	return {"message": "Availability slot added successfully."}, 201

#
# DELETE
#

# Delete availability slot
@tutor.route("/availability/<int:slot_id>", methods=["DELETE"])
def deleteAvailabilitySlot(slot_id):
    # Check if availability slot exists
    slot = Availability.query.get(slot_id)
    if not slot:
        return {"error": "Availability slot not found."}, 404

    # Delete availability slot from database
    db.session.delete(slot)
    db.session.commit()

    return {"message": "Availability slot deleted successfully"}, 200
