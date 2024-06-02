from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI(debug=True)

app.mount("/static", StaticFiles(directory="app/static"), name="static")

@app.get("/")
async def root():
    return FileResponse("app/static/index.html")

@app.get("/premium")
async def premium_page():
    return FileResponse("app/static/premium.html")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4545)


