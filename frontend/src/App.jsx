import React, { useState } from 'react';
import './App.css'
import {PingComponent} from './components/atoms/PingComponent.jsx';



import usePing from './hooks/apis/queries/usePing.js';



function App() {
const [isVisible, setIsVisible] = useState(false);

return (
    <>
      <button onClick={ () => setIsVisible(!isVisible) }> TOGGLE </button>
      {isVisible && <PingComponent />}
  
    </>
  )

}

export default App
