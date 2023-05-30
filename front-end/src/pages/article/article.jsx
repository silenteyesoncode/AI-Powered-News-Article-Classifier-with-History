import React, { useState } from 'react';
import axios from 'axios';
import MyComponent from '../../components/headingAnime';
import './article.scss';

const Article = () => {
  const [articleURL, setArticleURL] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [classificationHistory, setClassificationHistory] = useState([]);

  const handleInputChange = (e) => {
    setArticleURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/scrape', { url: articleURL });
      const { content } = response.data;
  
      // Make an API request to the classification service or algorithm
      // to get the predicted category for the article content
      const predictedCategory = await classifyArticle(content);
  
      // Update the state with the predicted category
      setPredictedCategory(predictedCategory);
      setArticleContent(content);

      // Add the article URL, content, and predicted category to the classification history
      const entry = { articleURL, content, predictedCategory };
      setClassificationHistory([...classificationHistory, entry]);
  
      // Clear the article URL input
      setArticleURL('');
  

    } catch (error) {
      console.error('Error:', error);
  
      if (error.response && error.response.status === 400) {
        // Display an alert for Bad Request
        alert('Invalid URL. Please enter a valid URL.');
      }
    }
  };
  

  const classifyArticle = async (content) => {
    try {
      const response = await axios.post('http://localhost:8080/deep-categorization', { text: content });
      const { category_list } = response.data;
  
      // Get the label of the first category in the list
      const predictedCategory = category_list[0].label;
  
      return predictedCategory;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('An error occurred during deep categorization');
    }
  };

  return (
    <div>
      <div className="container">
        <div style={{paddingTop: "10vh" }} >
          <MyComponent />
        </div>
    
        <form onSubmit={handleSubmit}>
          <label className="label">
            Add Your Article URL Here:
            <textarea
              value={articleURL}
              onChange={handleInputChange}
              className="textarea"
            />
          </label>
          <button type="submit" className="button animate-hover">
            Submit
          </button>
        </form>

        {predictedCategory && (
          <div className="predicted-category animate">
            <h2>Predicted Category: {predictedCategory}</h2>
            <p>{articleContent}</p>
          </div>
        )}

        {classificationHistory.length > 0 && (
          <div className="history">
            <h2>Classification History:</h2>
            <ul>
              {classificationHistory.map((entry, index) => (
                <li key={index}>
                  Article URL: {entry.articleURL} | Predicted Category: {entry.predictedCategory}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
