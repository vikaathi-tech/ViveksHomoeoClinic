from pydantic import BaseModel, int, str, datetime


class AttachmentsBase(BaseModel):
    InvestigationId : int
    Attachment :  bin
