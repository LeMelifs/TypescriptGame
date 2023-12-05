from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"
    username = Column(String, primary_key=True, index=True)
    hashed_password = Column(String)


class LeaderboardResult(Base):
    __tablename__ = "results"
    id = Column(Integer, primary_key=True, index=True)
    result = Column(Integer)
    username = Column(String, ForeignKey("users.username"))
    user = relationship("User")
