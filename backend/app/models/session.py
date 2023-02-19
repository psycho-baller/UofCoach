from app import db
from app.models.enrollment import Enrollment

from sqlalchemy.ext.hybrid import hybrid_property

class Session(db.Model):
	__tablename__ = "session"
	id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey("user.id"))
	
	users = db.relationship("User", secondary=Enrollment, backref="sessions")

	course_id = db.Column(db.Integer)
	date = db.Column(db.Date, nullable=False)
	start_time = db.Column(db.Integer, nullable=False)
	end_time = db.Column(db.Integer, nullable=False)
	location = db.Column(db.String(64))
	description = db.Column(db.Text)
	rate_per_hr = db.Column(db.Numeric(precision=5, scale=2))
	is_completed = db.Column(db.Boolean, nullable=False, default=False)
	is_paid = db.Column(db.Boolean, nullable=False, default=True)
	is_online = db.Column(db.Boolean, nullable=False, default=False)

	def __init__(self, course_id, date, start_time, end_time, location=None, description=None):
		self.course_id = course_id
		self.date = date
		self.start_time = start_time
		self.end_time = end_time
		self.location = location
		self.description = description

	@property
	def day(self):
		return self.date.weekday()

	def __iter__(self):
		yield "id", self.id
		yield "tutor_id", self.tutor_id
		yield "students", [user.id for user in self.users]
		yield "course_id", self.course_id
		yield "date", self.date.strftime("%Y-%m-%d")
		yield "start_time", self.start_time
		yield "end_time", self.end_time
		yield "location", self.location
		yield "description", self.description
		yield "rate_per_hr", str(self.rate_per_hr)
		yield "is_completed", self.is_completed
		yield "is_paid", self.is_paid
		yield "is_online", self.is_online
