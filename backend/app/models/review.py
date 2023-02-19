from app import db

class Review(db.Model):
	__tablename__ = "review"
	review_id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
	tutor_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
	rating = db.Column(db.DECIMAL)
	comment = db.Column(db.Text)
