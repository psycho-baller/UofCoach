from app import db

class Session(db.Model):
	__tablename__ = "session"
	id = db.Column(db.Integer, primary_key=True)
