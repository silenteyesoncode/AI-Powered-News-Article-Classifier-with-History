
import React, { useState } from 'react';


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
    <div style={styles.container}>
    <h1 style={styles.heading}>News Input Page</h1>
    <form onSubmit={handleSubmit}>
      <label style={styles.label}>
        Article:
        <textarea
          value={articleText}
          onChange={handleInputChange}
          style={styles.textarea}
          rows={10}
          cols={50}
        />
      </label>
      <br />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Open Sans, sans-serif',
    height: '50vh', // Set the height to 50% of the viewport height
  },
  heading: {
    fontSize: '35px',
    marginBottom: '20px',
    color: '#ffffff',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    color: '#ffffff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
  },
};

export default Article;
