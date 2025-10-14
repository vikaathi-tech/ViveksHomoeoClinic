from pydantic import BaseModel, int, str


class ObstetricalHistoryBase(BaseModel):

    CaseId : int
    History : str
