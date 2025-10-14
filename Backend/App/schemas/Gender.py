from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base

class Gender(Base):

    Gender = String(10)