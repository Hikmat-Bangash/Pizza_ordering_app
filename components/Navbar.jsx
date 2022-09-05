import React from "react";
import style from "../styles/navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {

 const quantity = useSelector(state=>state.cart.quantity);

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
            
          <div className={style.left}>
            <div className={style.logo}>📞</div>
            <div className={style.text}>
              <h3>0344-9136048</h3>
            </div>
          </div>

          <div className={style.center}>
            <div className={style.list}>
              <ul className={style.lists}>
                <Link href="/">
                <li className={style.li}>Home</li>
                </Link>
                <li className={style.li}>Contact</li>
                <li className={style.li}>
                  <h1 className={style.title} > HKB</h1>
                </li>
                <a href="#menu">
                <li className={style.li}>Menu</li>
                </a>
                <a href="#about">
                <li className={style.li}>About</li>
                 </a>
              </ul>
            </div>
          </div>

          <div className={style.right}>
            <Link href={'/cart'} passHref>
            <div className={style.cart}>
              🛒
              <div className={style.cartno}>{quantity}</div>
            </div>
          </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
