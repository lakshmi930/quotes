import { useState } from "react";
import Quote from "./components/Quote";
import { Content, NewQuoteButton, FooterBar, ErrorText } from "./App.styled.js";
import { Halo } from "./components/Halo/index.js";
import { ReadAloudButton } from "./components/ReadAloudButton/index.js";

function App() {
  const [quote, setQuote] = useState({
    text: "Serendipity or Destiny?\nEverything happens for a reason.",
    author: "Aristotle",
  });
  const [error, setError] = useState(null);

  const updateQuote = async () => {
    try {
      // Make the API request
      const response = await fetch('https://dummyjson.com/quotes/random');
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
      <ReadAloudButton text={quote.text} />
      <FooterBar>
        {!error && <NewQuoteButton onClick={updateQuote}>
          Need something better? Get inspired here!
        </NewQuoteButton>}
        {error && <ErrorText>{error}</ErrorText>}
      </FooterBar>
    </Content>
  );
}

export default App;
