import styled from 'styled-components';

import QuotesPattern from '../assets/pattern-quotes.svg';

const Wrapper = styled.section`
  position: relative;
  width: 80%;
  margin: 50px auto;

  @media (min-width: 992px) {
    position: absolute;
    top: 50%;
    left: 13%;
    transform: translateY(-50%);
    width: 40%;
    z-index: 9;
  }

  & .quote {
    color: #494954;
    margin-bottom: 20px;
  }

  & .author {
    color: #25232e;
    font-weight: bold;

    & span {
      color: #d6d6d7;
      font-weight: bold;
      margin-left: 5px;
    }
  }

  &:before {
    content: '';
    background-image: url(${QuotesPattern});
    background-size: cover;
    width: 120px;
    height: 100px;
    position: absolute;
    top: -4rem;
    left: 1.5rem;
    z-index: 1;
  }
`;

const TextBox = (props) => {
  return (
    <Wrapper>
      <p className="quote">"{props.quote}"</p>
      <p className="author">
        {props.name} <span>{props.position}</span>
      </p>
    </Wrapper>
  );
};

export default TextBox;
