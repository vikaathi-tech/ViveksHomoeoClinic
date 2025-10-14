from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.case_history import CaseHistory

class MensturalHistory(Base):
    __tablename__ ="Menstural_History"

    MensturalHistoryId = Column(Integer,primary_key=True,index=True)
    CaseId=Column(Integer,ForeignKey(CaseHistory.CaseId))
    LMP=Column(String(255))
    Duration = Column(String(255))
    Flow = Column(String(255))
    Clots = Column(String(255))
    Cycle = Column(String(255))
    Others = Column(String(255))