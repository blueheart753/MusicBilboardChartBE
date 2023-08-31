from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

from fastapi.responses import FileResponse

@app.get("/")
def index():
    return FileResponse("templates/index.html")

@app.get("/musicChart")
def musicChart():
    return FileResponse("templates/musicChart.html")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from pydantic import BaseModel

class siteName(BaseModel):
    siteName : str

@app.post("/musicChart")
def musicSite(data:siteName) :
    print(data)
    return 