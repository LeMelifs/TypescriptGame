from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from os.path import isfile

db_name = "db.sqlite3"
db_folder = "./"


def db_path():
    return db_folder + db_name


if not isfile(db_path()):
    db_folder += "backend/"

SQLALCHEMY_DATABASE_URL = "sqlite:///" + db_path()
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
