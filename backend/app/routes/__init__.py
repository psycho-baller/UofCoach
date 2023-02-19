from app import app

from app.routes.users import *


@app.route("/")
def test():
	return "Hello World"


app.register_blueprint(user)
