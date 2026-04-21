from fastapi import FastAPI, HTTPException
import requests

app = FastAPI()

API_KEY = "22e00169cebd4edca05a461d502242cd"
BASE_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map"

headers = {
    "Accepts": "application/json",
    "X-CMC_PRO_API_KEY": API_KEY
}

@app.get("/")
def home():
    return {"message": "API funcionando"}

@app.get("/cryptos")
def get_cryptos():
    try:
        response = requests.get(BASE_URL, headers=headers)

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)

        data = response.json()
        return data

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))