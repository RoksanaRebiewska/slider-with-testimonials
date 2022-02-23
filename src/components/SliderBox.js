import styled from 'styled-components';

import TextBox from './TextBox';
import ImageBox from './ImageBox';

import CurvePattern from '../assets/pattern-curve.svg';

const Wrapper = styled.section`
  position: absolute;
  width: 60vw;
  height: 70vh;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;

  @media (max-width: 992px) {
    width: 90vw;
    height: 90vh;
  }

  &::after {
    content: '';
    background: url(${CurvePattern});
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 100px;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

const SliderBox = (props) => {
  return (
    <Wrapper>
      <TextBox
        quote={props.quote}
        name={props.name}
        position={props.position}
      />
      <ImageBox image={props.image} alt={props.name} />
    </Wrapper>
  );
};

export default SliderBox;
