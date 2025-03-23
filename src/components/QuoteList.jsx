import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/motivations") // Fetch from Express
      .then((response) => {
        console.log("API Response:", response.data); // Log response to see if data is correct
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  return (
    <div>
      <h2>Saved Quotes</h2>
      <ul>
        {quotes.map((quoteData, index) => (
          <li key={index}>
            "{quoteData.message}" - {quoteData.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;