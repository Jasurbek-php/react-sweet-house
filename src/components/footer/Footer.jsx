import React from 'react'
import '../../App.css'

function Footer() {
  
  return (
    <div className='footer'>
      <form id="form" className="login-post" method="POST">
                    <p>Savollar yoki biz haqimizda fikrlariningiz bo'lsa shu yerga yozishingiz mumkin.</p>
                    <div className="inputs-container">
                    <input type="text" name="username" placeholder="Ismingiz" id="text1"/>
                    </div>
                    <div className="inputs-container">
                    <input type="number" name="username" placeholder="Telefon raqamingiz" id="text2"/>
                    </div>
                    <div className="inputs-container">
                        <textarea rows="5" cols="5" placeholder="Qanday noqulayliklar bor?" id="text3"></textarea>
                    </div>
                    <button className="login-button "  >Yuborish</button>

                    </form>
                <ul>
                    <li>
                       Aloqa uchun :
                        <a className="a-footer phone" href="tel:+998903400010">+998 (90) 340 00-10</a>     , 
                        <a className="a-footer phone" href="tel:+998939135555">+998(93) 913 55-55</a></li>
                </ul><br/><br/>
                <p className="sweet-House">© 2024 Sweet House. Barcha huquqlar himoyalangan. <a class="a-footer" href="https://www.instagram.com/jasur.be.7/">Jasur.be.7</a>  tomonidan tayyorlandi.</p>
    
    </div>
  )
  
}


export default Footer