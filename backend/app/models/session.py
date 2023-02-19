from app import db
from app.models.enrollment import Enrollment

class Session(db.Model):
	__tablename__ = "session"
	id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
	
	users = db.relationship("User", secondary=Enrollment, backref="sessions")

	course_id = db.Column(db.Integer)
	date = db.Column(db.Date, nullable=False)
	start_time = db.Column(db.Time, nullable=False)
	end_time = db.Column(db.Time, nullable=False)
	location = db.Column(db.String(50))
	description = db.Column(db.Text)
	rate_per_hr = db.Column(db.Numeric(precision=5, scale=2))
	is_completed = db.Column(db.Boolean, nullable=False, default=False)
	is_paid = db.Column(db.Boolean, nullable=False, default=True)
	is_online = db.Column(db.Boolean, nullable=False, default=False)
