import React from 'react'

function ThankYouPage({okUser}) {
    return (
        <div style={{width: '50%', display: 'flex', flexDirection: 'column', margin: 'auto', alignContent: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: '10%'}}>
                <h2 style={{paddingBottom: '10px'}}>{okUser && okUser._name}, Спасибо за оставленную заявку</h2>
                <h4 style={{paddingBottom: '10px'}}>В течении нескольких минут с Вами свяжется Наш специалист</h4>
                <h4 style={{paddingBottom: '10px', textAlign: 'center'}}>Если Вы согласились на рассылку, в ближайшем письме Вам будет отправлен купон на 5%-ую скидку!</h4>
                <h3>Примерная стоимость по вашему рассчёту: {okUser && Math.floor(okUser.bill)} рублей.</h3>

        </div>
    )
}

export default ThankYouPage
