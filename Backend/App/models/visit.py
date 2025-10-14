from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class Visit(Base):
    __tablename__ ="Visit"

    VisitId = Column(Integer,primary_key=True,index=True)
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Date_Of_Visit = Column(DateTime)