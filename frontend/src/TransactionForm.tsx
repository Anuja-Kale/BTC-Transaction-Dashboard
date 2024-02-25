// src/TransactionForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from './TransactionForm.module.css'; // Import the CSS module

const TransactionForm: React.FC = () => {
    const [transactionId, setTransactionId] = useState<string>('');
    const [transactionData, setTransactionData] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const fetchTransaction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.get(`http://localhost:3000/transaction/${transactionId}`);
            setTransactionData(response.data);
        } catch (err) {
            setError('Failed to fetch transaction data. Please try again.');
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={fetchTransaction}>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Enter Transaction ID"
                    required
                />
                <button type="submit">Fetch Transaction</button>
            </form>
            {error && <p className="error">{error}</p>}
            {transactionData && <div className="transaction-data">
                {/* Render your transaction data here */}
            </div>}
        </div>
    );
};

export default TransactionForm;
