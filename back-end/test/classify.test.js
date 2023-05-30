const { runDeepCategorization } = require('../classify');
const axios = require('axios');
const readline = require('readline');

describe('runDeepCategorization', () => {
  test('should return deep categorization result', async () => {
    // Mock the Axios post request
    const mockResponse = {
      status: 200,
      data: {
        // Mocked response data
        // Modify this according to the expected response structure
        category: 'Sports',
        confidence: 0.85
      }
    };
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);

    // Create a mock readline interface
    const mockInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Provide the test input
    let text = '';

    // Mock user input
    const mockQuestion = jest.spyOn(mockInterface, 'question');
    mockQuestion.mockImplementation((question, callback) => {
      text = 'Sample text for deep categorization'; // Set the text for testing
      callback(text);
    });

    // Execute the function
    const result = await runDeepCategorization(text);

    // Verify the result
    expect(result).toEqual(mockResponse.data);

    // Restore the mock
    mockQuestion.mockRestore();
  });

  test('should throw an error on failed request', async () => {
    // Mock the Axios post request to simulate an error
    const mockError = new Error('Failed request');
    jest.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

    // Provide the test input
    const text = 'Sample text for deep categorization';

    // Execute the function and expect it to throw an error
    await expect(runDeepCategorization(text)).rejects.toThrow('An error occurred during deep categorization');
  });
});
