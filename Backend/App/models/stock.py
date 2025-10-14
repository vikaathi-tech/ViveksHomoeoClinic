from sqlalchemy import Column,String,Integer,Boolean,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.medicine import Medicine

class Stock(Base):
    __tablename__ ="Stock"

    StockId = Column(Integer,primary_key=True,index=True)
    MedicineId = Column(Integer,ForeignKey(Medicine.MedicineId))
    Quantity = Column(Integer)