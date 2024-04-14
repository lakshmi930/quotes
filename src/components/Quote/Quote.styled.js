import styled from 'styled-components';

export const Wrapper = styled.div`
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vh;
    border-radius: 8px;
    margin: 0 auto;
    position: absolute;
    top: 45%;
    left: calc(50% - 25vh);
`;

export const BlockQuote = styled.blockquote`
    font-family: monospace;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    white-space: pre-wrap;
`;

export const Author = styled.div`
    color: maroon;
    font-family: monospace;
    font-size: 14px;
`;
