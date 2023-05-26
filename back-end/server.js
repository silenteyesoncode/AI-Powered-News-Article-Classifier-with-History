const express = require('express');
const cors = require('cors');
const { gotScraping } = require('got-scraping');
const cheerio = require('cheerio');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/scrape', async (req, res) => {
  try {
    const { url } = req.body;

    // Check if the URL is valid
    if (!isValidURL(url)) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    // Download HTML with Got Scraping
    const response = await gotScraping(url);
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
      url,
      content: articleContent
    };

    // Return the response object
    res.json(responseObj);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Helper function to validate URL
function isValidURL(url) {
  // Perform your URL validation logic here
  // For example, you can use a regular expression or a URL validation library
  // Return true if the URL is valid, false otherwise
  // This is just a simple example, you may need to implement a more robust validation
  return url.startsWith('http://') || url.startsWith('https://');
}
