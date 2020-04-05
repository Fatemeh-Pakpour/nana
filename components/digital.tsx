import React, { memo, useEffect } from 'react';
import styled from 'styled-components';

export const DigitalClock = memo(() => {
  const [date, setDate] = React.useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </>
  );
});
