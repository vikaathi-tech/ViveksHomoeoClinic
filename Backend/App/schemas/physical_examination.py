from pydantic import BaseModel, int, str


class PhysicalExaminationBase(BaseModel):

    PatientId : int
    Appearance : str
    Pulse : int
    BP : str
    Temperature : str
    Chest : str
    RespiratoryNote : str
    Systemic_Examination : str
