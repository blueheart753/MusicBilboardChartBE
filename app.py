from fastapi import FastAPI
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