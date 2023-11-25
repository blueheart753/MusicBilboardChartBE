from fastapi import FastAPI
from crawler import crawl_website

app = FastAPI()

url = 'https://namu.wiki/w/%EC%98%A4%EB%A9%94%EA%B0%80%EB%AA%AC#s-6'

@app.get("/crawl/{url}")
async def read_item(url: str):
    result = await crawl_website(url)
    return {"url": url, "content": result}