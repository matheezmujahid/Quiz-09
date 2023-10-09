exports.handler = async (event) => {
    const keyword = event.queryStringParameters.keyword;
  
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Matheez says: ${keyword}!`),
    };
    return response;
  };
  