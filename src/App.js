/* eslint-disable */
import './App.css';
import Title from './Title';
import Nav from './Nav';
import Menu_item from './Menu-item';
import data_ from './data';
import Menu from './Menu';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(data_);

  function clickHandler(filter_param){
    let newData = [];

    if(filter_param === "all") newData = data_;
    else{
      newData = data_.filter(doc=>{
        return doc.category === filter_param;
      })
    }

    setData(newData);
  }

  return (
    <div className="App">
      <Title/>
      <Nav clickHandler={clickHandler}/>
      {/* <Menu_item {...data_}/> */}
      <Menu data={data}/>
    </div>
  );
}

export default App;
