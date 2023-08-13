import os
from dotenv import load_dotenv
from fastapi import FastAPI, status, Request
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import firestore, initialize_app, credentials
import json
import cohere

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
COHERE_KEY = os.environ['COHERE_KEY']
# cred = credentials.Certificate("magic-chat-ddf75-e3484fe17c32.json")
# initialize_app(cred)
# db = firestore.client()
co = cohere.Client(COHERE_KEY)

@app.get("/")
async def root():
    """Main Root Function"""
    return {"message": "Hello World"}


@app.post("/parse_feedback")
async def parse_feedback(request: Request):
    """Parse User Feedback into a JSON based output"""
    try:

        req_body = await request.body()
        req_data = json.loads(req_body)
        prompt = req_data['prompt']

        message = "you are an expert parser. now wear your hat of a parser and parse the sentence I am going to give you. for example, for the sentence 'this the most terrible product I have seen, change the color of the skirt and then show me'. the output should be a JSON as \{'type': False, 'element':'pant'\} and for 'this dress is great. I like this but change the sandals. the output should be \{'type': False, 'element':'shoe'\}. and for 'great suggestion. I like this the output should be \{'type': True, 'element':''\}. Now generate for the sentence: "+prompt+" DO NOT WRITE ANYTHING OTHER THAN THE JSON OUTPUT."  
        response = co.generate(
            prompt = message,
        )

        return response[0]
    except BaseException as error:
        return {
            "status": "error",
            "message": str(error),
        }

