import { Author, BlockQuote, Wrapper } from "./Quote.styled";

function Quote({ text, author }) {
  return (
    <Wrapper>
        <BlockQuote>{text}</BlockQuote>
        <Author>{author}</Author>
    </Wrapper>
  );
}
export default Quote;
