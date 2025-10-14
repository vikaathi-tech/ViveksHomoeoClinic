from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base

class Designation(Base):
    __tablename__ ="Designation"

    DesignationId = Column(Integer,primary_key=True,index=True)
    Designation = Column(String(50))