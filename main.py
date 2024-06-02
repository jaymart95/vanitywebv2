from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
import uvicorn

app = FastAPI()
app.mount("/", StaticFiles(directory="app/static",html = True), name="static")


@app.get("/")
async def root():
    return FileResponse("index.html")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4545)