from selenium import webdriver
from selenium.webdriver.common.by import By
import time

browser = webdriver.Chrome()
browser.maximize_window()
browser.get("https://www.coupang.com/?src=1139000&spec=10799999&addtag=900&ctag=HOME&lptag=AF2317737&itime=20230821080605&pageType=HOME&pageValue=HOME&wPcid=16868021035589500365516&wRef=&wTime=20230821080605&redirect=landing&traceid=V0-183-879dd1202e5c73b2&mcid=afe37db282854ff0bf688a86630666eb&placementid=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=enliplecp13&impressionid=&campaigntype=&newssource=&contentkeyword=&subparam=")
time.sleep(20)

browser.find_element(By.LINK_TEXT, "로켓직구").click()