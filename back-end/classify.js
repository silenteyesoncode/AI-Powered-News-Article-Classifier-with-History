const axios = require('axios');
const FormData = require('form-data');

async function runDeepCategorization(text) {
  const formdata = new FormData();
  formdata.append("key", "d8c22050f0ec78662cf2649b9a120897");
  formdata.append("txt", text);
  formdata.append("model", "IAB_2.0-tier4");

  try {
    const response = await axios.post("https://api.meaningcloud.com/deepcategorization-1.0", formdata, {
      headers: formdata.getHeaders(),
      redirect: 'follow'
    });

    return response.data; // Return the response data
  } catch (error) {
    throw new Error('An error occurred during deep categorization');
  }
}

module.exports = { runDeepCategorization };
