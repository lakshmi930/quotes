import styled from 'styled-components';

export const Wrapper = styled.div`
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    border-radius: 8px;
    margin: 0 auto;
    position: absolute;
    top: 45%;
    left: 35%;
`;

export const BlockQuote = styled.blockquote`
    color: violetred;
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
