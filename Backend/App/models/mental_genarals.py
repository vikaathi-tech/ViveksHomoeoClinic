from sqlalchemy import Column,Integer,String,Boolean,Date,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.case_history import CaseHistory

class MentalGenerals(Base):
    __tablename__="Mental_generals"

    MentalGeneralsId = Column(Integer,primary_key=True,index=True)
    CaseId = Column(Integer,ForeignKey(CaseHistory.CaseId))
    Mental_Generals = Column(String(255))
    

