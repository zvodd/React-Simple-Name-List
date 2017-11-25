import React from 'react';
import { render } from 'react-dom';
import NameList from './NameList';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



const App = () => (
  <div style={styles}>
    <NameList />    
  </div>
);

render(<App />, document.getElementById('root'));
