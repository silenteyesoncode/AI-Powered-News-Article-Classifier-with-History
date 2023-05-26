import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './article.scss';

const Article = () => {
  const [articleText, setArticleText] = useState('');

  const handleInputChange = (e) => {
    setArticleText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired action with the article text
    console.log('Submitted article:', articleText);
    setArticleText('');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="heading">News Input Page</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Article:
            <textarea
              value={articleText}
              onChange={handleInputChange}
              className="textarea"
              rows={10}
              cols={50}
            />
          </label>
          <br />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Article;
