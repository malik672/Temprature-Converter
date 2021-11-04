import './App.css';
import  {useState} from 'react';

function App() {
  //state to store the type of the temmperature
 const [state, setState] = useState('');
 //state to store the number
 const [number, setNumber]= useState('');
 //state to store the result
 const [result , setResult] = useState('');

 //function to convert
 const Converter = (home) => {
   const formularKelvin = +number + 273.15;
   const formularCelcius = +number - 273.15 



   if(state === 'Celcius'){
    setResult(formularCelcius + '°C')
   }else{
     setResult(formularKelvin + 'K')
   }
   console.log(result);
 }
  return (
    <div className='container'>
      <h1>Temperature Converter</h1>
       <form action="">
         <div className='number'>
            <label htmlFor="degrees">Degree : </label>
            <input type="number" required placeholder='0' onChange={(e)=>(setNumber(e.target.value))}/>
          </div>
          <div className='select'>
            <label htmlFor="temprature">Type : </label>
            <select name="" id="" onChange={(e)=>(setState(e.target.value))}>
          
               <option value="Kelvin">Kelvin</option>
               <option value="Celcius">Celcius</option>
             </select>
          </div>
          <button   onClick={(e)=>(Converter(e.preventDefault()))}>Convert</button>
       </form>
       <label htmlFor="Result" id= 'label' >Result :</label>
       <input type="text" value={result} />
   </div>
  );
}

export default App;
