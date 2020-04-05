import React, { useState, useMemo, useEffect } from 'react';
import { DigitalClock } from '../components/digital';
const InputElem = () => {
  const [inputValue, setInputValue] = useState('');
  const [historyList, setHistoryList] = useState([]);
  const [date, setDate] = React.useState(new Date());

  const handelChange = event => {
    // event.preventDefault();
    setInputValue(event.target.value);
    setHistoryList([...historyList, event.target.value]);
    //  event.target.reset();
  };
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <input placeholder="Enter Your Name" onChange={handelChange} />
      <br />
      <br />
      {historyList.map(input => (
        <ul key={input}>
          <li>{input}</li>
        </ul>
      ))}
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
export default InputElem;
