import React from 'react'
import '../../App.css'
import one from '../../assets/one.jpg'
import { Link } from "react-router-dom";


function Header() {
return (
    <div className='menu'>
    <div className='card'>

  
                <div className="card_left one">
                    <img src={one} alt=""/>
                </div>
                <div className="card_right">
                    <h1>To'rtlar</h1>
                    <p>Ular ko'plab nonushta va tushlik kekslar asosi bo'lib, ko'pincha ishtahani ochish uchun xizmat qiladi. </p>
                     <Link to={"/First"}>
                     <button>Hammasini ko'rish</button> 
            </Link>
                </div>
            </div>


            <div className="card">
                <div className="card_left">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/671/338/large_2x/tasty-burger-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg" alt=""/>
                </div>
                <div className="card_right">
                    <h1>Burgerlar</h1>
                    <p>Burger: yumshoq bulochka, suvli patti, yangi sabzavotlar, mazali sous - ajoyib kombinatsiya!</p>
                    <Link to={"/Second"}>
                    <button>Hammasini ko'rish</button>
                    </Link> 
                </div>
            </div>

            <div className="card">
                <div className="card_left">
                    <img src="https://img.freepik.com/premium-photo/shawarma-rolled-lavash-moist-grilled-meat-with-onion-herbs-vegetables-wooden-black-background_124865-9126.jpg" alt=""/>
                </div>
                <div className="card_right">
                    <h1>Lavashlar</h1>
                    <p>Lavash: yupqa yassi nonlar, plombalarni o'rash uchun ideal, turli xil ta'm va tuzilishga ega. Ajoyib!</p>
                    <Link to={"/Third"}>
                    <button>Hammasini ko'rish</button>
                    </Link>
                </div>
            </div>

            <div className="card">
                <div className="card_left ">
                    <img className="one" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hotdog_in_black_background.png/800px-Hotdog_in_black_background.png" alt=""/>
                </div>
                <div className="card_right">
                    <h1>Xot-dog </h1>
                    <p>Hot-dog - bu mazali souslar va yangi sabzavotlar bilan bezatilgan yumshoq bulochkadagi mazali kolbasa! </p>
                    <Link to={"/Fourth"}>
                    <button>Hammasini ko'rish</button>
                    </Link>
                </div>
            </div>

            <div className="card">
                <div className="card_left ">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/443/862/large_2x/tasty-homemade-dark-chocolate-cake-with-dark-background-generative-ai-free-photo.jpg" alt=""/>
                </div>
                <div className="card_right">
                    <h1>Desertlar</h1>
                    <p>Shirin taomlar: ajoyib lazzatlar, nozik tortlar, mazali pishiriqlar va tetiklantiruvchi muzqaymoq. </p>
                    <Link to={"/Fifth"}>
                    <button>Hammasini ko'rish</button>
                    </Link>
                </div>
            </div>

            <div className="card two">
                <div className="card_left ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Broasted_chicken_in_black_background.png/800px-Broasted_chicken_in_black_background.png" alt=""/>
                </div>
                <div className="card_right">
                    <h1>KFC</h1>
                    <p>KFC tovuqli taomlar va aperatiflarga ixtisoslashgan tez ovqatlanish restoranlar tarmog'idir.</p>
                    <Link to={"/Sixth"}>
                        <button>Hammasini ko'rish</button>

                    </Link>
                </div>
            </div>

 </div>
    
  )
}

export default Header