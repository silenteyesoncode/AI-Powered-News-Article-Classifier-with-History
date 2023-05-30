const fetch = require('node-fetch');

async function runDeepCategorization() {
  const formdata = new FormData();
  formdata.append("key", "d8c22050f0ec78662cf2649b9a120897");
  formdata.append("txt", "YOUR TEXT HERE"); //Article To Add
  formdata.append("model", "IAB_2.0-tier4"); 

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://api.meaningcloud.com/deepcategorization-1.0", requestOptions);
    const { status, body } = await response.json();
    console.log(status, body);
  } catch (error) {
    console.log('error', error);
  }
}

runDeepCategorization();
