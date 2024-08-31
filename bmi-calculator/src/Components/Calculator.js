import React, { useEffect } from 'react'

const Calculator = () => {
    const [num1, setNum1] = React.useState(40);
    const [num2, setNum2] = React.useState(140);

    const weightHandler = (e) => {
        if(e.target.value < 1){
            return
        }
        setNum1(e.target.value)
    }

    const heightHandler = (e) => {
        if(e.target.value < 1){
            return
        }
        setNum2(e.target.value)
    }
    useEffect (
        () => {
            console.log("useEffect")
        },[])

    const bmi = (num1 / ((num2 / 100) ** 2)).toFixed(2);


  return (
    <div>
        <h6>Weight:{num1} kg</h6>
        <input type="range" onChange={weightHandler} min="40" max="100"/>
        <h6>Height: {num2} cm</h6>
        <input type="range" onChange={heightHandler} min="140" max="200"/>
        <h6>Your BMI is</h6>
        <h5>{bmi}</h5>
    </div>
  )
}

export default Calculator
