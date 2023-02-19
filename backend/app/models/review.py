from app import db

class Review(db.Model):
	__tablename__ = "review"
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
	session_id = db.Column(db.Integer, db.ForeignKey("session.id"))
	rating = db.Column(db.Numeric(precision=4, scale=3))
	comment = db.Column(db.Text)
