import requests
from bs4 import BeautifulSoup

url = 'https://vibe.naver.com/chart/total'
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "html")
songs = soup.find_all(attrs={"class":"inner_cell"})

for song in songs :
    print(songs.get_text)
# vibe melon