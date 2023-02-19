from app import db

class Availability(db.Model):
	__tablename__ = 'availability'

	id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
	date = db.Column(db.Integer, nullable=False)
	hour = db.Column(db.Integer, nullable=False)
