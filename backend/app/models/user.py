from app import db

class User(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True)
    password =db.Column(db.String(50))
    username =db.Column(db.String(50), unique=True)
    first_name =db.Column(db.String(50))
    last_name =db.Column(db.String(50))
    phone_number =db.Column(db.String(20))
    is_tutor =db.Column(db.Boolean)
    hourly_rate =db.Column(db.DECIMAL)
    bio =db.Column(db.Text)
    rating =db.Column(db.DECIMAL)
    course_code =db.Column(db.String(10))


