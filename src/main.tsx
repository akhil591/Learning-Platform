from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS (frontend-backend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/recommend")
def recommend(level: str = "beginner"):
    if level == "beginner":
        return {"lesson": "Intro to AI"}
    return {"lesson": "Advanced ML"}
