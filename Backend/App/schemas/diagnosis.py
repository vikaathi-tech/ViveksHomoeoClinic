from pydantic import BaseModel


class DiagnosisBase(BaseModel):

    PatientId : int
    Plan_of_Treatment : str
    Basis_Of_Selection_of_Med : str
