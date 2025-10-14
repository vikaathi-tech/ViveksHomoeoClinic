from pydantic import int, str
from Backend.App.core.database import Base
from Backend.App.models.person import Person


class Investigation(Base):

    PatientId: int
    Description: str
