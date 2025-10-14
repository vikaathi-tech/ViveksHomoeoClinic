from pydantic import BaseModel, int, str, datetime

class VisitBase(BaseModel):

    PatientId:int
    Date_Of_Visit : datetime