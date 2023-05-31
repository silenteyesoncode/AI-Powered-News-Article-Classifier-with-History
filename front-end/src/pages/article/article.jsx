import React, { useState } from 'react';
import axios from 'axios';
import MyComponent from '../../components/headingAnime';
import {  
  db, 
  doc, 
  auth ,
  collection ,
  addDoc,
  getDocs ,  
} from '../../firebase/firebase-utilities';
import './article.scss';

const Article = () => {

  const [articleURL, setArticleURL] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [classificationHistory, setClassificationHistory] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setArticleURL(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
  
      // Clear the article URL input
      setArticleURL('');
  
        // Get the UID of the currently logged-in user
        const user = auth.currentUser;
        let currentUserId = null; // Log the current user's document ID

        try {
          // Reference to the "users" collection
          const usersCollectionRef = collection(db, 'users');

          // Retrieve all documents from the "users" collection
          const querySnapshot = await getDocs(usersCollectionRef);

          // Iterate over the documents and find the document ID for the current user
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.uid === user.uid) {
              currentUserId = doc.id;
            }
          });

          // Store the response in Firestore with the user's UID as the document ID
          const userDocRef = doc(db, "users", currentUserId); // Reference to the user's document
          const newDocRef = await addDoc(collection(userDocRef, 'collection'), {
            articleURL: articleURL,
            content: content,
            predictedCategory: predictedCategory,
          });

          const collectionSnapshot = await getDocs(collection(userDocRef, 'collection'));

          // Create an array to store the retrieved data
          const historyData = [];

            // Iterate over the documents in the "collection" subcollection
              collectionSnapshot.forEach((doc) => {
                // Access the data of each document
                const data = doc.data();
                historyData.push(data);
              });

            // Update the classification history state with the retrieved data
            setClassificationHistory(historyData);

          console.log('Document written with ID:', newDocRef.id);
        } catch (error) {
          console.error('Error storing document:', error);
        }
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
          <div className="predicted-category animate" >
            <h2>Predicted Category: {predictedCategory}</h2>
            <h3 onClick={toggleDropdown}>Article Content (Click to See) : </h3>  
          { dropdownOpen ? <p> {articleContent}</p>: <p></p> }
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
