from app import db

Enrollment = db.Table("enrollment",
	db.Column("user_id", db.Integer, db.ForeignKey("user.id")),
	db.Column("session_id", db.Integer, db.ForeignKey("session.id"))
)
