from app import db

from flask_login import UserMixin

class User(db.Model, UserMixin):
	__tablename__ = "user"

	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(64), nullable=False, unique=True)
	email = db.Column(db.String(64), nullable=False, unique=True)
	password = db.Column(db.String(64), nullable=False)
	first_name = db.Column(db.String(64), nullable=False)
	last_name = db.Column(db.String(64))
	phone_number = db.Column(db.String(16))
	reviews = db.relationship("Review", backref="user")
	is_tutor = db.Column(db.Boolean, nullable=False, default=False)

	availabilitySlots = db.relationship("Availability", backref="user")
	tutorCourses = db.relationship("Tutorcourse", backref="tutor")
	hourly_rate = db.Column(db.Numeric(precision=5, scale=2))
	rating = db.Column(db.Numeric(precision=4, scale=3))
	bio = db.Column(db.Text)

	def __init__(self, username, email, password, first_name, last_name=None, phone_number=None):
		self.username = username
		self.email = email
		self.password = password
		self.first_name = first_name
		self.last_name = last_name
		self.phone_number = phone_number

	def __iter__(self):
		yield "id", self.id
		yield "username", self.username
		yield "email", self.email
		yield "first_name", self.first_name
		yield "last_name", self.last_name
		yield "phone_number", self.phone_number
		yield "is_tutor", self.is_tutor
