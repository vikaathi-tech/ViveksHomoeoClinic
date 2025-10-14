from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class Prescription(Base):
    __tablename__ ="Prescription"

    PrescriptionId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Date=Column(DateTime)
    Description = Column(String(255))