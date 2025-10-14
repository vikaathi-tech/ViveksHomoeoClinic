from sqlalchemy import Column, Integer, String, Boolean
from Backend.App.core.database import Base

class Login(Base):
    __tablename__ = "login"

    LoginId = Column(Integer, primary_key=True, index=True)
    UserName = Column(String(255), unique=True)
    Password = Column(String(255))
    FirstName = Column(String(255))
    LastName = Column(String(255))
    Failure_Login_Count = Column(Integer, default=0)
    Email = Column(String(255))
    Is_Locked = Column(Boolean, default=False)
    Is_Active = Column(Boolean, default=True)
    Image = Column(String(255))
    

