import { useHistory, useLocation, } from 'react-router-dom';
import React, { useEffect } from 'react';


function LocationTest(){
  const MyLocation =  useLocation()
  useEffect(() => {
    console.log(MyLocation)
  },[MyLocation])
  return(
  <div>
    MyLocation
  </div>
  )
}

function Btn() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  }
  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}


class HooksPage extends React.Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Btn />
        <LocationTest/>
      </div>
    );
  }
}
export default HooksPage;
