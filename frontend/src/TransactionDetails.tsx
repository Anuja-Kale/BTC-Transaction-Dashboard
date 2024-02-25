// src/TransactionDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './TransactionDetails.module.css'; // Make sure this CSS module exists

interface TransactionData {
  status?: string;
  eta?: string;
  transactionFees?: string;
  size?: number;
  virtualSize?: number;
  weightUnits?: number;
  version?: number;
  lockTime?: number;
  segwitFeeSavings?: string;
  privacyAnalysis?: string;
  // Add any other relevant fields for the transaction details
}

const TransactionDetails: React.FC = () => {
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams<{ id: string }>(); // This captures the :id parameter from the URL

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/transaction/${id}`);
        setTransactionData(response.data);
      } catch (error) {
        setError('Failed to fetch transaction data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.transactionDetails}>
      {transactionData ? (
        <>
          <h2>Transaction Details</h2>
          <div className={styles.transactionField}>
            <span>Status:</span> {transactionData.status}
          </div>
          <div className={styles.transactionField}>
            <span>ETA:</span> {transactionData.eta}
          </div>
          <div className={styles.transactionField}>
            <span>Transaction Fees:</span> {transactionData.transactionFees}
          </div>
          <div className={styles.transactionField}>
            <span>Size:</span> {transactionData.size}
          </div>
          <div className={styles.transactionField}>
            <span>Virtual Size:</span> {transactionData.virtualSize}
          </div>
          <div className={styles.transactionField}>
            <span>Weight Units:</span> {transactionData.weightUnits}
          </div>
          <div className={styles.transactionField}>
            <span>Version:</span> {transactionData.version}
          </div>
          <div className={styles.transactionField}>
            <span>Lock Time:</span> {transactionData.lockTime}
          </div>
          <div className={styles.transactionField}>
            <span>SegWit Fee Savings:</span> {transactionData.segwitFeeSavings}
          </div>
          <div className={styles.transactionField}>
            <span>Privacy Analysis:</span> {transactionData.privacyAnalysis}
          </div>
          {/* Add any other fields you need to display */}
        </>
      ) : (
        <div>No transaction data available.</div>
      )}
    </div>
  );
};

export default TransactionDetails;
