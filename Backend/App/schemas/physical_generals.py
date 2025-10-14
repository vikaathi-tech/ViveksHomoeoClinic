from pydantic import BaseModel, int, str, datetime


class PhysicalGeneralsBase(BaseModel):

    CaseId :int
    Appetite : str
    Thirst : str
    Sleep : str
    Stool : str
    Urine : datetime
    Sweat : int
