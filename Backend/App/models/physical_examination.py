from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class PhysicalExamination(Base):
    __tablename__ ="Physical_Examination"

    PhysicalExaminationId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Appearance=Column(String(255))
    Pulse = Column(Integer)
    BP = Column(String(10))
    Temperature = Column(String(10))
    Chest = Column(String(100))
    RespiratoryNote = Column(String(10))
    Systemic_Examination = Column(String(255))