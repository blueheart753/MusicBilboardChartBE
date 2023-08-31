from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

wait = WebDriverWait(driver, 10)

driver.get("https://www.music-flo.com/browse")

more_link = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".btn_list_more")))
time.sleep(2)
more_link.click()


def songsName() :
    songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".tit__text")))

    for song in songNames:
        print(song.text,end='\n')

def artist() :
    artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".artist__link")))
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
