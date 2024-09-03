import React, { useEffect } from 'react';
import '../../App.css';

function Footer() {
  
  useEffect(() => {
    const form = document.querySelector("#form");
    if (form) {
      const handleSubmit = (e) => {
        e.preventDefault();

        var text1 = document.getElementById("text1").value;
        var text2 = document.getElementById("text2").value;
        var text3 = document.getElementById("text3").value;
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        document.getElementById("text3").value = "";

        var my_text = `Murojaatchi ismi : ${text1} %0A  Nomeri: ${text2} %0A Savoli : ${text3} `;
        var token = "7408025837:AAHCDxr29GtCxodoyn8RQ7dNGnWCyPX4Ynw";
        var chat_id = -1002217417354;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&perse_mode=html/`;        

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        console.log("Message successfully sent!");
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup the event listener on component unmount
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []); // Empty dependency array to run this effect once after the component mounts

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
        <button className="login-button">Yuborish</button>
      </form>
      <ul>
        <li>
          Aloqa uchun :
          <a className="a-footer phone" href="tel:+998903400010">+998 (90) 340 00-10</a>, 
          <a className="a-footer phone" href="tel:+998939135555">+998(93) 913 55-55</a>
        </li>
      </ul>
      <br/><br/>
      <p className="sweet-House">© 2024 Sweet House. Barcha huquqlar himoyalangan. <a className="a-footer" href="https://www.instagram.com/jasur.be.7/">Jasur.be.7</a> tomonidan tayyorlandi.</p>
    </div>
  );
}

export default Footer;
