from pydantic import BaseModel, int, str


class MensturalHistoryBase(BaseModel):

    CaseId : int
    LMP : str
    Duration : str
    Flow : str
    Clots : str
    Cycle : str
    Others : str
