const gotScraping = require('got-scraping').gotScraping;
const cheerio = require('cheerio');

const articleUrl = 'https://www.nytimes.com/2023/05/26/us/politics/medicaid-coverage-pandemic-loss.html';

async function scrapeArticleContent() {
  try {
    // Download HTML with Got Scraping
    const response = await gotScraping(articleUrl);
    const html = response.body;

    // Parse HTML with Cheerio
    const $ = cheerio.load(html);

    // Remove unwanted content
    $('script').each((index, element) => {
      const scriptContent = $(element).html();
      if (scriptContent.includes('window.__preloadedData')) {
        $(element).remove();
      }
    });

    // Remove additional script tags or unwanted JavaScript code
    $('script').remove();

    // Get the article content
    const articleContent = $('body').text();

    // Create a structured response object
    const responseObj = {
      url: articleUrl,
      content: articleContent
    };

    // Print the response object as JSON
    console.log(JSON.stringify(responseObj, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

scrapeArticleContent();
