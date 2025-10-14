from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class Investigation(Base):
    __tablename__ ="Investigation"

    InvestigationId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Description = Column(String(255))