import React from "react";
import "./Home.css"
import Product from "./Product.js";





function Home(){
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                        id="1"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                        id="2"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239}
                        rating={4}
                        image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605119807/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/8937873604638.png/mxw_2048,f_auto"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                        id="3"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/514kNkerQ0L._SX324_BO1,204,203,200_.jpg"
                        />
                        <Product
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://www.reliancedigital.in/medias/Amazon-Echo-Plus-2-0-GRY-Computer-Speaker-491431038-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQ1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDJjL2g5Ni85MDQzNzA1MTM1MTM0LmpwZ3wwMTg4MDIzZDZkOTQ3ODQ3NTUxYjdjMDU2NGEwNzAyNzM4MmI0YTNjNDM5NjRjMmUwZjgxNmZmMWZmNjliNjNh"
                        />
                        <Product
                        id="5"
                        title="New Apple iPad Pro (12.9-inch, Wi Fi, 128GB) Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_GEO_IN?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617922048000"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                        id="6"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$1300_1038_PNG$"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;