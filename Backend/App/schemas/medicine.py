from pydantic import BaseModel,int, str, datetime
from Backend.App.core.database import Base

class MedicineBase(BaseModel):

    Name : str
    Purchase_Date : datetime
    Potency : str
    Price : int