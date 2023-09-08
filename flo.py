from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

wait = WebDriverWait(driver, 10)

driver.get("https://whostan.com/Flochart")


def songsName() :
    songNames = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".divTableCell:nth-child(5)")))

    for song in songNames:
        print(song.text,end='\n')

def artist() :
    artist = WebDriverWait(driver,10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".divTableCell:nth-child(4)")))
    for Artists in artist:
        print(Artists.text,end='\n')

def count() :
    count = 1
    for countUp in range(100):
        countUp+=count
        print(countUp)
songsName()
print("\n")
artist()
# count()


time.sleep(0.05)

driver.quit()
