from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app
app = FastAPI()

# Enable CORS so frontend can access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Sample API endpoint
@app.get("/recommend")
def recommend(level: str = "beginner"):
    if level.lower() == "beginner":
        return {"lesson": "Intro to AI"}
    elif level.lower() == "intermediate":
        return {"lesson": "ML Basics"}
    elif level.lower() == "advanced":
        return {"lesson": "Deep Learning"}
    else:
        return {"lesson": "General AI Concepts"}
