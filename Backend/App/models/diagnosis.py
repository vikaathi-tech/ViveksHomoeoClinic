from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class Diagnosis(Base):
    __tablename__ ="Diagnosis"

    DiagnosisId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Plan_of_Treatment=Column(String(255))
    Basis_Of_Selection_of_Med = Column(String(255))