import React, { useEffect, useState } from 'react';

const Index = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
      let interval = null;
      if (timerOn) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 100);
        }, 100);
      }else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [timerOn])
    console.log(time);
  return (
    <div>
      <h1>{("0" + (time/100) % 100).slice(-2)}</h1>
      <div className=''>
        <button onClick={() => setTimerOn(true)}>Strat</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resum</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Index;
