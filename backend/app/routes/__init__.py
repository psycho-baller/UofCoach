from app import app
from app.routes.auth import *
from app.routes.users import *


@app.route("/")
def test():
	return "Hello World"


app.register_blueprint(auth)
app.register_blueprint(user)
