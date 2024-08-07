import "./App.css";
import "./index.css"
import { useState } from "react";

function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState(0);
  const [message,setMessage] = useState("");

  //logic
  let calBmi=(e)=>{
      e.preventDefault();//No resetting until asked to
      if(weight==0 || height==0){
          alert("Invalid data");
      }
      else{
        let Bmi = (weight/(height*height));
        setBmi(Bmi.toFixed(1));//tofixed is for round off to 1 place

        if(Bmi<18.5){
          setMessage("You are underWeight");
        }
        else if(Bmi>=18.5 && Bmi<25){
          setMessage("You are Healthyweight");
        }
        else{
          setMessage("You are Overweight");
        }
      }
  }

  let Reload = ()=>{
    window.location.reload();
  }




  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height (m)</label>
            <input type="text" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>


            <button className="btn btn-outline" type="submit" onClick={Reload}>Reload</button>
          </div>
          <div className="center">
            <h1>Your BMI is : {bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
