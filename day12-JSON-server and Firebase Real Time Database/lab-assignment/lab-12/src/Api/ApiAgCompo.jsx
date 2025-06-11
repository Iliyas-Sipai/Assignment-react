import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
// import axios from 'axios';

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center",
    color: "#333"
  },
  spinner: {
    textAlign: "center",
    color: "#007BFF",
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    textAlign: "center"
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  listItem: {
    background: "#f9f9f9",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  }
}

const ApiAgCompo = () => {
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
   <div style={styles.container}>
      <h1 style={styles.heading}>Data from API</h1>

      {loading && <div style={styles.spinner}>🔄 Loading...</div>}

      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <ul style={styles.list}>
          {data.map((item) => (
            <li key={item.id} style={styles.listItem}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>


  )

}

export default ApiAgCompo
