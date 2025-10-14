from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base

class Gender(Base):
    __tablename__ ="Gender"

    GenderId = Column(Integer,primary_key=True,index=True)
    Gender = Column(String(10))