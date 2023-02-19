from app import app
from app.routes.auth import *
from app.routes.users import *

from flask import session


@app.route("/")
def test():
	print(session["user_id"])
	return "Hello World"


app.register_blueprint(auth)
app.register_blueprint(user)
