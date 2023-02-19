from app import db

class Session(db.Model):
	__tablename__ = 'sessions'

	session_id = db.Column(db.Integer, primary_key=True)
	tutor_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
	enrollment_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
	date = db.Column(db.Date)
	start_time = db.Column(db.Time)
	end_time = db.Column(db.Time)
	location = db.Column(db.String(50))
	description = db.Column(db.Text)
	rate_per_hr = db.Column(db.DECIMAL)
	total_amount = db.Column(db.DECIMAL)
	is_completed = db.Column(db.Boolean)
	is_paid = db.Column(db.Boolean)
	course_code = db.Column(db.String(10))
