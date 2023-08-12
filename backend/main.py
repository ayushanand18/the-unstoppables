import os
from dotenv import load_dotenv
from fastapi import FastAPI, status, Request
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import firestore, initialize_app, credentials
import json

load_dotenv()
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

#---------------------
# Environment
#---------------------
stripe_api_key = os.getenv('stripe_api_key')
cred = credentials.Certificate("magic-chat-ddf75-e3484fe17c32.json")
initialize_app(cred)
db = firestore.client()

@app.get("/")
async def root():
    return {"message": "Hello World"}
