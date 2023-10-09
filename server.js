const axios = require('axios');

exports.handler = async (event) => {
  const { searchTerm } = event.queryStringParameters;
  

  const apiEndpoint = 'https://90o7ijg4n6.execute-api.us-east-2.amazonaws.com/say';

  try {
    
    const response = await axios.get(`${apiEndpoint}?keyword=${searchTerm}`);

 
    const responseBody = {
      result: response.data,
    };

   
    const responseHeaders = {
      'Content-Type': 'application/json',
    };

   
    const statusCode = 200;

    
    const responseObj = {
      statusCode,
      headers: responseHeaders,
      body: JSON.stringify(responseBody),
    };

    return responseObj;
  } catch (error) {
    
    const errorMessage = 'Error encountered while communicating with the external API';

    
    const responseObj = {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: errorMessage }),
    };

    return responseObj;
  }
};
