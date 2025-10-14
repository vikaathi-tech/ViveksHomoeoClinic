from pydantic import BaseModel, int, str, datetime

class StockBase(BaseModel):

    MedicineId : int
    Quantity : int