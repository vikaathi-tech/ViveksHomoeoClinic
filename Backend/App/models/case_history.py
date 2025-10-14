from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class CaseHistory(Base):
    __tablename__ ="CaseHistory"

    CaseId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Presenting_Complaints=Column(String(255))
    Past_history = Column(String(255))
    Family_history = Column(String(255))
    Occupational_history = Column(String(255))
    Modalities = Column(String(255))
    Desires = Column(String(255))
    Aversions = Column(String(255))
    Thermal = Column(String(255))
    Others = Column(String(255))