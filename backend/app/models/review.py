from app import db

class Review(db.Model):
	__tablename__ = "review"
	id = db.Column(db.Integer, primary_key=True)
