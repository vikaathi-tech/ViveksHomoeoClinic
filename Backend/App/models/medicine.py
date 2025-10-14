from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime,LargeBinary,DATETIME
from Backend.App.core.database import Base

class Medicine(Base):
    __tablename__ ="Medicine"

    MedicineId = Column(Integer,primary_key=True,index=True)
    Name = Column(String(255))
    Purchase_Date = Column(DateTime)
    Potency = Column(String(20))
    Price = Column(Integer)