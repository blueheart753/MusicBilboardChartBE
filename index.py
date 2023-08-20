import requests
from bs4 import BeautifulSoup

url = 'https://www.youtube.com/watch?v=Kr_5AgDx1f8'
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "html")

print(soup.find("yt-formatted-string",attrs={"class":"style-scope ytd-watch-metadata"}).getText())
# vibe melon