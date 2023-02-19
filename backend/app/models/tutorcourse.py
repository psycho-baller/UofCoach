from app import db

class Tutorcourse(db.Model):
	__tablename__ = "tutorcourse"

	id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
	course_id = db.Column(db.Integer, nullable=False)

	def __init__(self, tutor_id, course_id):
		self.tutor_id = tutor_id
		self.course_id = course_id

	def __iter__(self):
		yield "tutor_id", self.tutor_id
		yield "course_id", self.course_id
