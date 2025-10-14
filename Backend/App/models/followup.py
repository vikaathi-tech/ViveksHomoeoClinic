from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime
from Backend.App.core.database import Base
from Backend.App.models.prescription import Prescription

class FollowUp(Base):
    __tablename__ ="FollowUp"

    FollowUpId = Column(Integer,primary_key=True,index=True)
    PrescriptionId=Column(Integer,ForeignKey(Prescription.PrescriptionId))
    Date=Column(DateTime)
    Description = Column(String(255))