from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

driver.get("https://www.youtube.com/watch?v=QU9c0053UAU&list=PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m&index=2")


def songsName() :
    songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".ytd-playlist-panel-video-renderer")))

    for song in songNames:
        print(song.text,end='\n')

def count() :
    count = 1
    for countUp in range(100):
        countUp+=count
        print(countUp)
songsName()
# count()


time.sleep(0.05)

driver.quit()
