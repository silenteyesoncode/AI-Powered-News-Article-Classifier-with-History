# AI-Powered News Article Classifier with History

# [Project Live](https://jolly-sprinkles-608702.netlify.app)

## Objective
The goal of this project is to create a web application that classifies news articles into categories and keeps track of past classification requests. The application should take a news article URL as input, scrape the article content, predict its category using an AI model, store the request and the prediction in a database, and display the predicted category as well as a history of past classification requests.

## User Interface[(Front-End)](./front-end)
### Home Page
A landing page with instructions on how to use the application.

### Prediction Page
A form where users can enter a news article URL. After the URL is submitted, the application should display the predicted category as well as a history of past classification requests, including the article URLs and their predicted categories.

## Server[(Back-End)](./back-end)
### Scraping Service
A service that takes a news article URL, scrapes the article content, and returns it.

### Classification Service
A service that takes the scraped article content and predicts its category using an AI model.





