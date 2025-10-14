from pydantic import BaseModel, int, str, datetime


class AppointmentBase(BaseModel):
    DoctorId: int
    PatientId: int
    Time_of_Appointment: datetime
    Is_Closed: bool

    class Config:
        orm_mode = True
