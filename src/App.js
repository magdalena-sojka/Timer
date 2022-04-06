import { useState, useEffect } from 'react';
import Container from './components/Container/Container.js'
import FormattedTime from './components/FormattedTime/FormattedTime.js'
import Button from './components/Button/Button.js'

const App = () => {

  const [time, setTime] = useState(0); 
  const [start, setStart] = useState(null);

  useEffect(() => {
    let timer = null;

    if(start) {
      timer = setInterval(() => {
        setTime(prevValue => prevValue + 1)
      }, 1)
    } 
    return () => { 
      if(timer) clearInterval(timer)
    };
  }, [start]);

  return (
    <Container>
      <FormattedTime time={time}/>
      <Button setTime={setTime} setStart={setStart} />
    </Container>

  );
};

export default App;