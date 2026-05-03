from fastapi import FastAPI

app = FastAPI()

@app.get("/process")
def process():
  return {"message": "Hello from Python service"}
