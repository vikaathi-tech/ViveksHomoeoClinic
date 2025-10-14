from sqlalchemy import Column,Integer,String,Boolean,Date,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.case_history import CaseHistory

class PhysicalGenerals(Base):
    __tablename__="Physical_generals"

    PhysicalGeneralsId = Column(Integer,primary_key=True,index=True)
    CaseId = Column(Integer,ForeignKey(CaseHistory.CaseId))
    Appetite = Column(String(100))
    Thirst = Column(String(100))
    Sleep = Column(String(255))
    Stool = Column(String(255))
    Urine = Column(Date)
    Sweat = Column(Integer)

