from pydantic import BaseModel, int, str, datetime

class PrescriptionBase(BaseModel):

    PatientId:int
    Date:datetime
    Description : str