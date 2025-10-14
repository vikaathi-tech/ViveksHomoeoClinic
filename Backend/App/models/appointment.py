from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime
from Backend.App.core.database import Base
from Backend.App.models.person import Person

class Appointment(Base):
    __tablename__ ="Appointment"

    AppointmentId = Column(Integer,primary_key=True,index=True)
    DoctorId=Column(Integer,ForeignKey(Person.PersonId))
    PatientId=Column(Integer,ForeignKey(Person.PersonId))
    Time_of_Appointment = Column(DateTime)
    Is_Closed = Column(Boolean)