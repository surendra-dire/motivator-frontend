import { useState } from "react";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteList from "./components/QuoteList.jsx";

function App() {
  const [newQuote, setNewQuote] = useState(null);

  return (
    <div>
      <h1>Motivator App</h1>
      <QuoteForm onQuoteAdded={setNewQuote} />
      <QuoteList newQuote={newQuote} />
    </div>
  );
}

export default App;
