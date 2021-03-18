import React from 'react';
import s from './SecondBlock.module.css'

const SecondBlock = (props) => {
    //рассчеты по бренду 
    const [flag, setFlag] = React.useState(false)
    let state = props.state
    React.useEffect(() => {
        if(state.firstBlockState && state.firstBlockState.materialValue === 70){
        setFlag(true)} else {setFlag(false)}
    }, [state.firstBlockState])
    const onBrandChange = (e) => {
        return state.brand = e.target.value
    }
    //рассчеты по товару
    const onProductChange = (e) => {
        return state.product = e.target.value
    }
    //рассчeты по допам
    const onAdditionChange1 = (e) => {
        let addition = document.getElementById('addition1');
        if (addition.checked === true){
           return state.additions += +e.target.value
        }
        return state.additions -= +e.target.value
    }
    const onAdditionChange2 = (e) => {
        let addition = document.getElementById('addition2');
        if (addition.checked === true){
           return state.additions += +e.target.value
        }
        return state.additions -= +e.target.value
    }
    const onAdditionChange3 = (e) => {
        let addition = document.getElementById('addition3');
        if (addition.checked === true){
           return state.additions += +e.target.value
        }
        return state.additions -= +e.target.value
    }
    const onAdditionChange4 = (e) => {
        let addition = document.getElementById('addition4');
        if (addition.checked === true){
           return state.additions += +e.target.value
        }
        console.log(state)
        return state.additions -= +e.target.value
    }

    return (
        <div className={s.secondSection}>
            <div className={s.chooseProduct}>
                <span>
                    <h3>Выбор товара</h3>
                </span>
                <div>
                    <label>Бренд:</label>
                    <select onChange={onBrandChange} className={s.brandSelect}>
                        <option selected value="1.3">DEKKER</option>
                        <option value="1.1">PARKETOFF</option>
                        <option value="1.2">TARWOOD</option>
                        <option value="1.1">BARLINEK</option>
                        <option value="1.2">TARKETT</option>
                        <option value="1.4">POLARWOOD</option>
                    </select>
                </div>
                <div>
                    <label>Материал:</label>
                    <select onChange={onProductChange} className={s.brandSelect}>
                        <option selected value="1.3">Дуб</option>
                        <option value="1.1">Берёза</option>
                        <option value="1.1">Сосна</option>
                        <option value="1.4">Кедр</option>
                    </select>
                </div>
            </div>
            <div className={s.otherProducts}>
                <span>
                    <h3>Сопутствущие товары</h3>
                </span>
                <form >
                    <input onChange={onAdditionChange1}  value='0.1' type="checkbox" id="addition1" /><label>Крепеж</label><br/>
                    <input onChange={onAdditionChange2}  value='0.5' type="checkbox" id="addition2" /><label>Подложка</label><br/>
                    <input onChange={onAdditionChange3}  value='0.2' type="checkbox" id="addition3" /><label>Плинтус</label><br/>
                    {flag && flag?<input value='0.1' onChange={onAdditionChange4} type="checkbox" id="addition4"/>:<div></div>}
                </form>
            </div>
        </div>
    )
}

export default SecondBlock