# TODO
> Information on tasks to be accomplished as a checklist

+ [ ] Frontend
  + [x] Setup project with Next, TypeScript and App Router
  + [ ] integrate FireAuth, FireStore
  + [x] Flipkart mainpage clone
  + [ ] Chat Widget as a component
  + [ ] Two way process:
    + [ ] a single prompt and extract tags from it <- needs backend call
    + [ ] a pipeline letting users select tags with a chat flow <- priority
  + [ ] chat based flow, integrate API call for generating tags based on the conversation
  + [ ] generate images based on the tag <- API call at server
  + [ ] take in human feedback through prompts on the image + ping API backend to parse the prompt <- frontend should specify according to particular schema
  + [ ] show new images on the screen
  + [ ] **Additional**
    + [ ] add buy this on Flipkart/search this on Flipkart option <- needs a built product catalog. will look at later
    + [ ] enable a try it out feature using camera
    + [ ] add user feedback on the generated image
+ [ ] Backend
  + [x] setup basic skeleton with FastAPI
  + [ ] expose endpoint for running a cron job to digest all the social media scrapes
    + integrate instagram API to scrape at a specific time of the day
  + [ ] expose endpoint for taking in user tags, and munching with the browsing history from the database, and product purchase history
  + [ ] expose endpoint to generate using RunwayML based on the tags fetched from the DB
+ [ ] Database
  + [ ] database design of collections
    + [ ] user collection: to store user metadata
    + [ ] purchase history collection: purchase history per user <- optional
    + [ ] browsing history collection: browsing history per user <- optional
    + [ ] tags collection: purchased tags/browsing history tags dumped from a cron job from above to this collection
      - auto populate by default right now
    + [ ] social media trends: based on age, gender, region scraped by a cron job
+ [ ] Machine Learning (GenAI)
  + [ ] Runway ML API
  + [ ] Parse user feedback into actionable tasks. what to change and how - get the tags <- using CohereAI
  + [ ] parse the scraped Insta Feed using an API <- just a tool, logic in backend part
