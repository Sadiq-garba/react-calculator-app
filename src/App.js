
import React, {useState} from 'react';
import * as math from "mathjs"
import  logo from './logo.svg';
import "./button.css";
import './App.css';
import Button from "./Button.jsx"
import Input from "./Input"
import "./Input.css"


function App() { 

const [text, setText] = useState("");
const [result, setResult] = useState("");
 
const addToText = (val) => {
 setText(text => [...text, val + ""]);

};

const calculateResult = () => {
const input = text.join('');

   setResult(math.evaluate(input));
 
 };


const resetInput = (val) => {
  setText("");
  setResult("");
 
 };

return(
<div className="App">
    <div className="calc-wrapper">
         <Input text={text}  result={result}/>
       <div className="row">
         <Button symbol="7"  handleClick={addToText}/>
         <Button symbol="8"  handleClick={addToText} />
         <Button symbol="9"  handleClick={addToText} />
         <Button symbol="/" color="#f2a33c" handleClick={addToText} />
      
      </div>
      <div className="row">
         <Button symbol="4" handleClick={addToText} />
         <Button symbol="5"  handleClick={addToText}  />
         <Button  symbol="6"  handleClick={addToText} />
         <Button symbol="*" color="#f2a33c" handleClick={addToText}/>
      
       </div>
       <div className="row">
         <Button symbol="1"  handleClick={addToText}/>
         <Button symbol="2" handleClick={addToText}/>
         <Button symbol="3" handleClick={addToText}/>
         <Button symbol="+" color="#f2a33c" handleClick={addToText} />
      
       </div> 
       <div className="row">
         <Button symbol="0"  handleClick={addToText} />
         <Button symbol="."  handleClick={addToText} />
         <Button symbol="=" handleClick={calculateResult} />
         <Button symbol="_" color="#f2a33c"  handleClick={addToText} />
       </div>
       <Button symbol="clear" color="red"  handleClick={resetInput} />
    </div>
    <p style="color:red">Developed by Sadiq</p>
</div>


)

}





  



export default App;
