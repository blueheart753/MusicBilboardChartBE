import httpx

async def crawl_website(url):
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.text