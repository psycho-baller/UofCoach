from dotenv import load_dotenv
from os import getenv

load_dotenv()

dbURI = lambda type, host, port, name, user, pssw: f"{type}://{user}:{pssw}@{host}:{port}/{name}"

class Config:
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_ENGINE_OPTIONS = {
		"pool_recycle": 280,
		"pool_timeout": 20
	}

	SESSION_TYPE = "filesystem"
	SESSION_FILE_DIR = "sessions"
	SESSION_PERMANENT = False
	SESSION_USE_SIGNER = True

	def __init__(self):
		for var in ["SECRET_KEY"]:
			setattr(self, var, getenv(var))

		self.SQLALCHEMY_DATABASE_URI = getenv("DB_URI")

		if not self.SQLALCHEMY_DATABASE_URI:
			self.SQLALCHEMY_DATABASE_URI = dbURI(
				getenv("DB_TYPE", default="mysql"),
				getenv("DB_HOST", default="localhost"),
				getenv("DB_PORT", default="3306"),
				getenv("DB_NAME", default="uofcoach"),
				getenv("DB_USER", default="root"),
				getenv("DB_PSSW", default="")
			)
