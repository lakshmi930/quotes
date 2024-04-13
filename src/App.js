import { useState } from "react";
import Quote from "./components/Quote";
import { Content, NewQuoteButton, Title, TitleBar } from "./App.styled.js";
import { Halo } from "./components/Halo/index.js";

function App() {
  const [quote, setQuote] = useState({
    text: "Serendipity or Destiny?\nEverything happens for a reason.",
    author: "Aristotle",
  });
  const [error, setError] = useState(null);

  const updateQuote = async () => {
    try {
      // Make the API request
      const response = await fetch('https://dummyjson.com/quotes/1');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      const data = await response.json();
      setError(null);
      setQuote({
        text: data.quote,
        author: data.author,
      });
    } catch (err) {
      setError('An error occurred while fetching a new quote.');
    }
  };

  return (
    <Content>
      <Halo />
      <Quote text={quote.text} author={quote.author} />
      <TitleBar><Title>Feeling</Title></TitleBar>
    </Content>
  );
}

export default App;
