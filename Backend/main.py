from fastapi import FastAPI
from Backend.App.core.database import engine, Base
# from Backend.App.api import login
from contextlib import asynccontextmanager
from Backend.App.models import person,login
  
  
@asynccontextmanager
async def lifespan(app: FastAPI):
       # Create tables on startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
               

app = FastAPI(lifespan=lifespan)
  
# app.include_router(login.router)