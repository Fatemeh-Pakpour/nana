import React from 'react';
import { DigitalClock } from '../components/digital';

const DigitalClockPage = () => {
  return <DigitalClock />;
};
DigitalClockPage.getInitialProps = async ({ date }) => {
  return { date };
};

export default DigitalClockPage;
