from sqlalchemy import Column,Integer,String,Boolean,Date,ForeignKey
from Backend.App.core.database import Base
from Backend.App.models.designation import Designation

class Person(Base):
    __tablename__="Person"

    PersonId = Column(Integer,primary_key=True,index=True)
    FirstName = Column(String(100))
    LastName = Column(String(100))
    Address_Line_1 = Column(String(255))
    Address_Line_2 = Column(String(255))
    DOB = Column(Date)
    Gender = Column(Integer)
    Primary_Contact_Numner = Column(Integer)
    Secondary_Contact_Number = Column(Integer)
    Is_Married = Column(Boolean)
    Is_Staff = Column(Boolean)
    Is_Patient = Column(Boolean)
    Degree = Column(String(100))
    Designation = Column(Integer,ForeignKey(Designation.DesignationId))
    Certificate_Number = Column(String(50))
    Year_Of_Experience = Column(Integer)
    Pass_Out_Year = Column(String(5))
    Attender_Name = Column(String(100))
    Relationship_Of_Attender = Column(String(100))
    Occupation = Column(String(20))
    OP_Number = Column(Integer)

