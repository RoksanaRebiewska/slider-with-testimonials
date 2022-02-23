import styled from 'styled-components';

import BgPattern from '../assets/pattern-bg.svg';

const Wrapper = styled.div`
  position: relative;
  width: 70%;

  @media (min-width: 992px) {
    position: absolute;
    top: 50%;
    right: 20%;
    transform: translateY(-50%);
    z-index: 2;
    width: 60%;
    max-width: 400px;
  }

  & img {
    width: 100%;
    padding: 100px;
    background: url(${BgPattern});
    background-size: 100% 100%;

    @media (max-width: 991px) {
      padding: 50px;
    }
  }
`;

const ImageBox = (props) => {
  return (
    <Wrapper>
      <img src={props.image} alt={props.alt} />
    </Wrapper>
  );
};

export default ImageBox;
