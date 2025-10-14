from pydantic import BaseModel,int, str
from Backend.App.core.database import Base


class LoginBase(BaseModel):

    UserName : str
    Password : str
    FirstName : str
    LastName : str
    Failure_Login_Count : int
    Email : str
    Is_Active : bool
    Image : str
