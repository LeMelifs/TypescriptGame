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
    username: str

    class Config:
        from_attributes = True


class LeaderboardNewResult(LeaderboardResult):
    is_new: bool
