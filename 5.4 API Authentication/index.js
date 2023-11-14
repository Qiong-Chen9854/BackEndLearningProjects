import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

  //TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Mandy";
const yourPassword = "ILoveMandy";
const yourAPIKey = "4ad58ac4-c0f6-4c5d-bb3c-e059637722ff";
const yourBearerToken = "8262ebc5-72b4-40da-8f28-1ffbba5a0b41";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL+"random");
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});



  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
    axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL+"all?page=2",
    {
      auth: {
        username: "Mandy",
        password: "ILoveMandy"
      }
    });
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
app.get("/apiKey", async (req, res) => { 
  try {
    const response = await axios.get(API_URL+"filter",{
      params: {
        score: 5,
        apiKey: "4ad58ac4-c0f6-4c5d-bb3c-e059637722ff",
      }
    });
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

// const config = {
//   headers:{Authorization: `Bearer ${yourBearerToken}` },
// }  
app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(API_URL+"secrets/42",{
      headers:{Authorization: `Bearer ${yourBearerToken}` }
    });
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
