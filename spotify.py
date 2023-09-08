from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

driver.get("https://kworb.net/spotify/country/global_daily.html")


def songsName() :
    songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".mp>div>a:nth-child(2)")))

    for song in songNames:
        print(song.text,end='\n')

def artist() :
    artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".mp>div>a:nth-child(1)")))
    for Artists in artist:
        print(Artists.text,end='\n')

def count() :
    count = 1
    for countUp in range(100):
        countUp+=count
        print(countUp)
songsName()
artist()
# count()


time.sleep(0.05)

driver.quit()
