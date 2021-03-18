import React from 'react'
import axios from "axios";
import qs from 'qs'
import s from './Calculator/Calculator.module.css'
import { Link } from 'react-router-dom'

function Form({state, setOkUser}) {
    const [user, setUser] = React.useState({
        _name: '',
        email: '',
        tel: '', 
        bill: 0
    })

    const sendFormHandler = async() => {
        await axios.post('api/user', qs.stringify(user))
        .then((res) => {
            // alert(res.data.message + `Сумма: ${Math.floor(user.bill)}`)
            setOkUser(res.data.newUser)
        })
    }

    return (
        <div>
            <form style={{maxWidth: '30%', margin: 'auto', border: '1px solid grey', borderRadius: '20px', padding: '20px', marginTop: '50px'}}>
                <div class="mb-3">
                    <label class="form-label">Ваше Имя</label>
                    <input onChange={(e) => setUser(user => ({...user, _name: e.target.value}))} type="text" class="form-control"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input onChange={(e) => setUser(user => ({...user, email: e.target.value}))} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Дать согласие на рассылку</label>
                </div><br/>
                <div class="mb-3">
                    <label class="form-label">Номер телефона</label>
                    <input onChange={(e) => setUser(user => ({...user, tel: e.target.value, bill: state.result}))} type="number" class="form-control"></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={sendFormHandler} type="button" className={s.btn}><Link style={{color: 'black', textDecoration: 'none'}} to='/ThankYouPage'>Рассчитать стоимость</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Form
