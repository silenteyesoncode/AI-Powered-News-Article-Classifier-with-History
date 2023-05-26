import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './article.scss';

const Article = () => {
  const [articleURL, setArticleURL] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');
  const [classificationHistory, setClassificationHistory] = useState([]);

  const handleInputChange = (e) => {
    setArticleURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API request to the classification service or algorithm
    // to get the predicted category for the article URL
    // Replace the `classifyArticle` function with your actual implementation
    const predictedCategory = classifyArticle(articleURL);

    // Update the state with the predicted category
    setPredictedCategory(predictedCategory);

    // Add the article URL and predicted category to the classification history
    const entry = { articleURL, predictedCategory };
    setClassificationHistory([...classificationHistory, entry]);

    // Clear the article URL input
    setArticleURL('');
  };

  const classifyArticle = (articleURL) => {
    // Perform the actual classification logic or make an API call here
    // and return the predicted category
    return 'Technology';
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="heading">News Input Page</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Article URL:
            <input
              type="text"
              value={articleURL}
              onChange={handleInputChange}
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        {predictedCategory && (
          <div className="predicted-category">
            <h2>Predicted Category: {predictedCategory}</h2>
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
