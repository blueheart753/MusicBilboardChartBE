from selenium import webdriver
from selenium.webdriver.common.by import By
import time

browser = webdriver.Chrome()
browser.maximize_window()
browser.get("https://vibe.naver.com/chart")
close = browser.find_element(By.CSS_SELECTOR,".ly_popup unsubscribe:nth-child(1)").click()
# login = browser.find_element(By.CLASS_NAME,"link_login").click()

time.sleep(60)
