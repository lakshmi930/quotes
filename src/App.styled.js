import styled from 'styled-components';

export const Content = styled.div`
  background: url(https://usagif.com/wp-content/uploads/gif/outerspace-6.gif);
  background-size: cover;
  height: 100vh;
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const NewQuoteButton = styled.button`
  background-color: chocolate;
`;

export const TitleBar = styled.div`
  color: white;
  font-family: monospace;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  margin: 0;
  padding: 8px;
`;

export const Title = styled.h1`
  color: white;
  font-family: monospace;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
