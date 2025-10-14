from sqlalchemy import Column, String, Integer, Boolean, ForeignKey, DateTime
from Backend.App.core.database import Base
from Backend.App.models.prescription import Prescription


class FollowUp(Base):

    PrescriptionId: int
    Date: DateTime
    Description: str
