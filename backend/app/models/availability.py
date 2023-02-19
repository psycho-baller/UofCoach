from app import db

class Availability(db.Model):
	__tablename__ = 'availability'

	availability_id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
	date = db.Column(db.Integer, nullable=False)
	hour_slot = db.Column(db.Integer, nullable=False)
