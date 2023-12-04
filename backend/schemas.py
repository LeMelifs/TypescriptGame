from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User(BaseModel):
    username: str
    hashed_password: str


class SimpleResult(BaseModel):
    result: int


class LeaderboardResult(SimpleResult):
    user: User

    class Config:
        from_attributes = True
