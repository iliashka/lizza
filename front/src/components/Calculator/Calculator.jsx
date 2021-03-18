import React from "react";
import FirstBlock from "../FirstBlock/FirstBlock";
import Form from "../Form";
import SecondBlock from "../SecondBlock/SecondBlock";
import s from "./Calculator.module.css";

const Calculator = (props) => {
  let state = props.state;

  const calculate = () => {
    state.result =
      +state.firstBlockState.area *
      +state.firstBlockState.materialValue *
      +state.secondBlockState.brand *
      +state.secondBlockState.product *
      +state.secondBlockState.additions;
  };

  return (
    <div>
      <div className={s.calculatorBody}>
        <FirstBlock state={props.state.firstBlockState} />
        <SecondBlock state={props.state.secondBlockState} />
      </div>
      <div className={s.buttonWrapper}>
          <button className='btn' style={{background: '#532831', color: 'white'}} type='button' onClick={calculate}>OK</button>
      </div>
      <Form setOkUser={props.setOkUser} state={state}/>
    </div>
  );
};

export default Calculator;
