import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

// Use the API key from the environment variable
const API_KEY = process.env.CRYPTO_API_KEY;

if (!API_KEY) {
  console.error('API key not found. Please set the CRYPTO_API_KEY environment variable.');
  process.exit(1); // Exit if no API key is found
}

app.get('/transaction/:id', async (req, res) => {
    const transactionId = req.params.id;
    const API_ENDPOINT = `https://rest.cryptoapis.io/v2/blockchain-data/bitcoin/mainnet/transactions/${transactionId}`;

    try {
        const response = await axios.get(API_ENDPOINT, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching transaction data:', error);

        if (axios.isAxiosError(error)) {
            // Now TypeScript knows this is an AxiosError
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              res.status(error.response.status).json(error.response.data);
            } else if (error.request) {
              // The request was made but no response was received
              res.status(500).json({ message: 'No response received', error: error.message });
            } else {
              // Something happened in setting up the request that triggered an Error
              res.status(500).json({ message: 'Error setting up request', error: error.message });
            }
          } else {
            // Handle non-Axios errors
            const e = error as Error; // Type assertion here
            res.status(500).json({ message: 'An error occurred', error: e.message });
          }
          
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
