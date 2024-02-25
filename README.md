# BTC Transaction Dashboard

This project is a full-stack application that provides a user interface for fetching and displaying Bitcoin transaction details using the CryptoAPIs service. It is composed of a backend server built with Express.js and a frontend created with React.

## Backend

Located in the `/backend` directory, it's responsible for making API calls to CryptoAPIs to fetch transaction data based on the provided transaction ID.

### Setup

1. Navigate to the `backend` directory.
2. Install the dependencies with `npm install`.
3. Set the environment variable `CRYPTO_API_KEY` with your CryptoAPIs key in the `.env` file.
4. Start the server with `npm start`. The server will run on the port specified by the `PORT` environment variable or default to 3000.

## Frontend

The frontend is a React application in the `/frontend` directory, which provides a form for users to input a transaction ID and view the details.

### Setup

1. Navigate to the `frontend` directory.
2. Install the dependencies with `npm install`.
3. Start the React development server with `npm start`. It typically runs on port 3000, but will choose the next available port if 3000 is busy.

## Usage

1. Enter the transaction ID in the input field provided on the frontend.
2. Click the "Fetch Transaction" button to send the request.
3. View the transaction details below the form if the ID is valid and exists on the Bitcoin testnet.

## Contributing

If you'd like to contribute, please fork the repository and create a pull request with your changes. You can also open an issue with bugs and feature requests.

## License

This project is open-source and available under the MIT License.
