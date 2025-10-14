from pydantic import BaseModel


class CaseHistoryBase(BaseModel):

    PatientId: int
    Presenting_Complaints: str
    Past_history: str
    Family_history: str
    Occupational_history: str
    Modalities: str
    Desires: str
    Aversions: str
    Thermal: str
    Others: str
