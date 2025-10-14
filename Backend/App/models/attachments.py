from sqlalchemy import Column,String,Integer,Boolean,ForeignKey,DateTime,LargeBinary
from Backend.App.core.database import Base
from Backend.App.models.investigation import Investigation

class Attachments(Base):
    __tablename__ ="Attachments"

    AttachmentId = Column(Integer,primary_key=True,index=True)
    InvestigationId=Column(Integer,ForeignKey(Investigation.InvestigationId))
    Attachment = Column(LargeBinary)