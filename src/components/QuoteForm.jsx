import { useState } from "react";
import axios from "axios";

const QuoteForm = ({ onQuoteAdded }) => {
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message || !author) {
            alert("Both quote and author are required!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/motivations", {
                message: message,
                author: author
            });

            console.log("Saved successfully: ", response.data);
            setMessage("");
            setAuthor("");

            // Trigger refresh of quotes
            if (onQuoteAdded) onQuoteAdded();
        } catch (error) {
            console.error("Error saving motivation:", error);
            alert("Failed to save motivation");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your quote"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Save Quote</button>
        </form>
    );
};

export default QuoteForm;
