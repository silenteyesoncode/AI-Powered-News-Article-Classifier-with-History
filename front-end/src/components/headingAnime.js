import React, { useEffect } from 'react';
import anime from 'animejs';

const MyComponent = props => {
  useEffect(() => {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  }, []);

  return (
    <h1 className="ml12" style={{ 
      fontFamily: 'Roboto',
      fontWeight: 100 ,
      fontSize: 140,
      color: '#ffffff'
      }}>
      Input Your Article
    </h1>
  );
};

export default MyComponent;
