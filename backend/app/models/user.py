from app import db

class User(db.Model):
	__tablename__ = "user"
	id = db.Column(db.Integer, primary_key=True)
