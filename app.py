from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi import Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import pymysql
from pydantic import BaseModel

templates = Jinja2Templates(directory="templates")
app = FastAPI(docs_url="/documentation", redoc_url=None)
 
@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html",{"request":request})