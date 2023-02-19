from app import db

Enrollment = db.Table("enrollment",
	db.Column("user_id", db.Integer, db.ForeignKey("user.id"), nullable=False),
	db.Column("session_id", db.Integer, db.ForeignKey("session.id"), nullable=False)
)
