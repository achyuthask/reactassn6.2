import './App.css';
import Uselocalstorage from './components/uselocalstorage';
import {useLayoutEffect} from 'react' ; 

function App() {
const [dcolor ,setdcolor] = Uselocalstorage ('d-color','light');

useLayoutEffect(() => {
    if(dcolor === 'light'){
        document.body.style.backgroundColor = "#fff"
    }
else if (dcolor === 'dark'){
    document.body.style.backgroundColor = "#000" 
  }else{
    document.body.style.backgroundColor = "#e8e8e8"
  }
   } ,[dcolor])
 

    return(
        <div className='App'>
            <h1>OVERRATED</h1><br></br><br></br>
            <button style={{backgroundColor : "pink"}}
            onClick={() => {dcolor === 'light'? setdcolor('dark') : setdcolor('light')}}
            >Toggle</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h1 style={{color :"pink" }}>THE WET CODE BASE</h1>
            <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{color :"pink" }}>GOOD BYE,CLEAN CODE</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{color :"pink" }}>MY DECADE IN REVIEW</h1>
        </div>
    )
};
export default App;
