from selenium import webdriver
import keyboard
import requests
from bs4 import BeautifulSoup

def main():
    url = "https://www.coupang.com/?src=1139000&spec=10799999&addtag=900&ctag=HOME&lptag=AF2317737&itime=30821080605&pageType=HOME&pageValue=HOME&wPcid=16868021035589500365516&wRef=&wTime=20230821080605&redirect=landing&traceid=V0-183-879dd1202e5cb2&mcid=afe37db282854ff0bf688a86630666eb&placementid=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=enliplecp13&impressionid=&campaigntypenewssource=&contentkeyword=&subparam="

    # Chrome 드라이버를 저장한 디렉토리의 경로를 지정합니다.
    chrome_driver_path = "C:/Users/kimminam/AppData/Roaming/Python/Python38/chromedriver-win64/chromedriver.exe"

    # Chrome options 설정
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--log-level=3')  # 로깅 수준 조절 (0 = 모든 로그, 1 = 경고를 시작으로 출력, 2 = 오류를 시작으로 출력, 3 = 아무것도 않기)

    # webdriver를 초기화하고 chrome_driver_path와 chrome_options를 명시합니다.
    driver = webdriver.Chrome(chrome_driver_path, options=chrome_options)
    driver.get(url)
    
    while not keyboard.is_pressed('q'):
        pass

    driver.quit()

if __name__ == '__main__':
    main()
