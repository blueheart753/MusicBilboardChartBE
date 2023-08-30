from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

driver.get("https://vibe.naver.com/chart/total")

def songsName() :
    songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,"tr > .song")))
    # artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR," tr > .artist > .inner")))
    count = 1

    for song in songNames:
        print(song.text,end='\n')



print(songsName(),end='\n')

time.sleep(0.05)

driver.quit()
