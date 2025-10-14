from pydantic import BaseModel, int, str, datetime


class PersonBase(BaseModel):

    FirstName : str
    LastName : str
    Address_Line_1 : str
    Address_Line_2 : str
    DOB : datetime
    Gender : int
    Primary_Contact_Numner : int
    Secondary_Contact_Number : int
    Is_Married : datetime
    Is_Staff : datetime
    Is_Patient : datetime
    Degree : str
    Designation : str
    Certificate_Number : str
    Year_Of_Experience : int
    Pass_Out_Year : str
    Attender_Name : str
    Relationship_Of_Attender : str
    Occupation : str
    OP_Number : int
