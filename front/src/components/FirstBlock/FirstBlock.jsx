import React from "react";
import s from "./FirstBlock.module.css";

const FirstBlock = (props) => {
    let state = props.state
    let updateInputLength = (event) => {
       state.length = event.target.value
       state.area = (+state.length * +state.width)
       return state
    }
    let updateInputWidth = (event) => {
        state.width = event.target.value
        state.area = (+state.length * +state.width)
        return state
     }
    let onRadioChange = (e) => {
       return state.materialValue = e.target.value;
    }

  return (
    <div className={s.firstSection}>
      <div className={s.materials}>
        <span>
          <h3>Материал пола</h3>
        </span>
        <form >
            <input onChange={onRadioChange} name='material' value='150' type="radio"/>
            <label>Массивная доска</label>
            <br />
            <input onChange={onRadioChange} name='material' value='100' type="radio" />
            <label>Инженерная доска</label>
            <br />
            <input onChange={onRadioChange} name='material' checked value='105' type="radio" />
            <label>Паркетная доска</label>
            <br />
            <input onChange={onRadioChange} name='material' value='125' type="radio" />
            <label>Модульный паркет</label>
            <br />
            <input onChange={onRadioChange} name='material' value='70' type="radio" />
            <label>Ламинат</label>
            <br />
        </form>
      </div>
      <div className={s.roomSize}>
        <span>
          <h3>Размеры помещения</h3>
        </span>
        <label>
          Длина помещения
          <input
            onChange={updateInputLength}
            className={s.roomLength}
            type="number"
          />
          M
        </label>
        <br />
        <label>
          Ширина помещения
          <input
            onChange={updateInputWidth}
            className={s.roomWidth}
            type="number"
          />
          M
        </label>
        <br />
      </div>
    </div>
  );
};

export default FirstBlock
