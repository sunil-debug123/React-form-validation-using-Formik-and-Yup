import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import BasicModal from './components/Modal';

function App() {
  const [data, setData] = useState({})
  const handleModal = (e) =>{
    setData({})
  }
  return (
    <div>
        <Header /> <br />
        <Form 
        onFormSubmit={(el)=>setData(el)}
        />
        {console.log(data)}
        {Object.keys(data).length > 0 && (<BasicModal list={data} onModalClose={handleModal}/>)}
    </div>
  );
}

export default App;
