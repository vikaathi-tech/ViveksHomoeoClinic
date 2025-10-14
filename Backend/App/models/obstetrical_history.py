from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.case_history import CaseHistory

class ObstetricalHistory(Base):
    __tablename__ ="Obstetrical_History"

    ObstetricalHistoryId = Column(Integer,primary_key=True,index=True)
    CaseId=Column(Integer,ForeignKey(CaseHistory.CaseId))
    History = Column(String(255))