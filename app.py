from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

def count() :
        count = 1
        for countUp in range(100):
            countUp+=count
            print(countUp)

def vibe() :
    driver.get("https://vibe.naver.com/chart/total")

    def songsName() :
        songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".link_text")))
        for song in songNames:
            print(song.text,end='\n')

    def artist() :
        artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".link_artist")))
        for Artists in artist:
            print(Artists.text,end='\n')

    time.sleep(0.05)

    songsName()
    artist()

def apple():
    driver.get("https://music.apple.com/kr/playlist/%EC%98%A4%EB%8A%98%EC%9D%98-top-100-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD/pl.d3d10c32fbc540b38e266367dc8cb00c")


    def songsName() :
        songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".songs-list-row__song-name")))

        for song in songNames:
            print(song.text,end='\n')

    def artist() :
        artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".click-action")))
        for Artists in artist:
            print(Artists.text,end='\n')
    songsName()
    artist()

def bugs():
    driver.get("https://music.bugs.co.kr/chart")

    def songsName() :
        songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".title > a")))

        for song in songNames:
            print(song.text,end='\n')

    def artist() :
        artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".artist > a")))
        for Artists in artist:
            print(Artists.text,end='\n')

    songsName()
    artist()


driver.quit()
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
async def musicSite(data:siteName):
    return print(await data)
