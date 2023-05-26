const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeArticleContent(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const articleContent = $(/* selector for the article content */).text();
    return articleContent.trim();
  } catch (error) {
    console.error('Error scraping article content:', error.message);
    return null;
  }
}

// Example usage
const articleUrl = 'https://www.thehindu.com/news/national/sc-refuses-to-entertain-pil-for-inauguration-of-new-parliament-building-by-president/article66895985.ece';
scrapeArticleContent(articleUrl)
  .then((content) => {
    if (content) {
      console.log('Article content:', content);
    } else {
      console.log('Failed to scrape article content.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
