from pydantic import BaseModel, int, str


class MentalGeneralsBase(BaseModel):

    CaseId : int
    Mental_Generals : str
