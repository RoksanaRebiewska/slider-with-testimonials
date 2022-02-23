import styled from 'styled-components';

import Next from '../assets/icon-next.svg';
import Prev from '../assets/icon-prev.svg';

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 5px 5px 10px #0d0d0f;
  width: 150px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  bottom: 25%;
  right: 43%;
  z-index: 99;

  @media (max-width: 991px) {
    bottom: 13%;
    right: 50%;
    transform: translateX(50%);
  }

  & .container {
    position: relative;
    height: 100%;
  }

  & .container div {
    &:hover {
      cursor: pointer;
    }
  }

  & .container #next {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  & .container #prev {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

  & .non-active {
    display: none;
  }
`;

const Slider = (props) => {
  const nextSlideHandler = () => {
    props.onNextSlide();
  };

  const prevSlideHandler = () => {
    props.onPrevSlide();
  };

  return (
    <Wrapper>
      <div className="container">
        <div>
          <img src={Next} onClick={nextSlideHandler} id="next" />
        </div>
        <div>
          <img
            src={Prev}
            onClick={prevSlideHandler}
            id="prev"
            className="non-active"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Slider;
