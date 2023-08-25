from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

driver.get("https://vibe.naver.com/chart/total")

songName = WebDriverWait(driver,1).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".title_badge_wrap")))
count = 1
for songNames in songName:  
    print(count,"위 : ",songNames.text)
    count += 1
    if count == 100:
        break
time.sleep(60)