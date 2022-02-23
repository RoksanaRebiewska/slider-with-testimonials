import { useState } from 'react';

import './App.css';

import SliderBox from './components/SliderBox';
import Slider from './components/Slider';

import Tanya from './assets/image-tanya.jpg';
import John from './assets/image-john.jpg';
import Grace from './assets/image-grace.jpg';
import Mark from './assets/image-mark.jpg';

const data = [
  {
    quote:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    image: `${Tanya}`,
  },
  {
    quote:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instuctors go into is incredible. I now feel so confident about starting up as a professional developer",
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    image: `${John}`,
  },
  {
    quote:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    name: 'Grace Smith',
    position: 'Graphic Designer',
    image: `${Grace}`,
  },
  {
    quote:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instuctors go into is incredible. I now feel so confident about starting up as a professional developer",
    name: 'Mark Johnson',
    position: 'Junior Front-end Developer',
    image: `${Mark}`,
  },
];

function App() {
  const [chosenSlide, setChosenSlide] = useState(0);

  const dataSize = data.length - 1;

  const nextSlideHandler = () => {
    document.getElementById('prev').classList.remove('non-active');
    setChosenSlide((prevState) => {
      if (prevState === dataSize - 1) {
        document.getElementById('next').classList.add('non-active');
      }
      return prevState + 1;
    });
  };

  const prevSlideHandler = () => {
    document.getElementById('next').classList.remove('non-active');
    setChosenSlide((prevState) => {
      if (prevState === 1) {
        document.getElementById('prev').classList.add('non-active');
      }
      return prevState - 1;
    });
  };

  return (
    <>
      <SliderBox
        quote={data[chosenSlide].quote}
        name={data[chosenSlide].name}
        position={data[chosenSlide].position}
        image={data[chosenSlide].image}
      />
      <Slider onNextSlide={nextSlideHandler} onPrevSlide={prevSlideHandler} />
    </>
  );
}

export default App;
