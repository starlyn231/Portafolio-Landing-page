import React from 'react';
import TrackVisibility from 'react-on-screen';

const ComponentToTrack = ({ isVisible }) => {
  const style = {
    background: isVisible ? 'red' : 'blue'
  };
  return <div style={style}>Hello</div>;
}

export const Test = () => {
  return (

    < TrackVisibility >
      <ComponentToTrack />
    </TrackVisibility >

  );
}