from fastapi.responses import FileResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

def findSong(siteName):
    if siteName == 'Vibe':
        siteURL = 'https://vibe.naver.com/chart/total'
        songNamesSelector = '.link_text'
        ArtistNameSelector = '.link_artist'
    elif siteName == 'Spotify':
        siteURL = 'https://open.spotify.com/playlist/37i9dQZEVXbNxXF4SkHj9F'
    elif siteName == 'Melon':
       siteURL = 'https://www.melon.com/chart/index.htm'
       songNamesSelector = '.wrap_song_info > .rank01 > span > a'
       ArtistNameSelector = '.wrap_song_info > .rank02 > a'
    elif siteName == 'Genie' :
        siteURL = 'https://www.genie.co.kr/chart/top200'
        songNamesSelector = '.title'
        ArtistNameSelector = '.artist'
    elif siteName == 'Bugs' :
        siteURL = 'https://music.bugs.co.kr/chart'
        songNamesSelector = '.title > a'
        ArtistNameSelector = '.artist > a'
    elif siteName == 'Flo':
        siteURL = 'https://www.music-flo.com/browse'
        songNamesSelector = '.tit__text'
        ArtistNameSelector = '.artist__link'
    elif siteName == 'Apple Music' :
        siteURL = 'https://music.apple.com/kr/playlist/%EC%98%A4%EB%8A%98%EC%9D%98-top-100-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD/pl.d3d10c32fbc540b38e266367dc8cb00c'
        songNamesSelector = '.songs-list-row__song-name'
        ArtistNameSelector = '.click-action'
    driver.get(siteURL)

    def songsName() :
        songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,songNamesSelector)))
        for song in songNames:
            print(song.text,end='\n')

    def artist() :
        artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,ArtistNameSelector)))
        for Artists in artist:
            print(Artists.text,end='\n')

    time.sleep(0.05)

    songsName()
    artist()

def count() :
        count = 1
        for countUp in range(100):
            countUp+=count
            print(countUp)


driver.quit()
app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


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


class siteName(BaseModel):
    siteName : str

@app.post("/musicChart")
def musicSite(data:siteName):
    site_name = data.siteName
    findSong(site_name)
    return {site_name}
