const express = require('express');
const cors = require('cors');
const { gotScraping } = require('got-scraping');
const cheerio = require('cheerio');
const { runDeepCategorization } = require('./classify');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => res.type('html').send(html));

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
    // Remove unwanted iframes
        $('iframe').each((index, element) => {
          $(element).remove();
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

app.post('/deep-categorization', async (req, res) => {
  try {
    const { text } = req.body;

    // Run deep categorization
    const deepCategorizationResult = await runDeepCategorization(text);

    // Return the deep categorization result
    res.json(deepCategorizationResult);
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
  const pattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  return pattern.test(url);
}



const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from SilenteyesOnCode!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from SilenteyesOnCode!
    </section>
  </body>
</html>
`

