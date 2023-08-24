from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time

driver = webdriver.Chrome()

driver.get("https://vibe.naver.com/chart/total")
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": """ Object.defineProperty(navigator, 'webdriver', { get: () => undefined }) """})


elem = WebDriverWait(driver,1).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,".link_text")))
for elems in elem:  
    print("곡명 : ",elems.text)
time.sleep(60)