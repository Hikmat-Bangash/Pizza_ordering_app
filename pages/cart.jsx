import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {useState } from "react";
import OrderModule from "../components/OrderModule";

const Cart = () => {


  console.log(useSelector((state) => state.cart.products));
  const cart = useSelector((state) => state.cart);
  const [open, setopen] = useState(false)
  const [orderbtn, setorderbtn] = useState(false)

  const dispatch = useDispatch();


  //-------------  JSX SECTION -------------

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.Table}>
          {/* ----- Table Heading --------- */}
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          {/* ------------ Table Body ------------- */}
          <tbody align="center">
            {cart.products.map((prduct, index) => (
              <tr className={styles.trow} key={index}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={prduct.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{prduct.title}</span>
                </td>
                <td>
                  <span className={styles.exrowas}>
                    {prduct.extras.map((e) => (
                      <span> {e.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>{prduct.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{prduct.Quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {prduct.price * prduct.Quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> ${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
      {open ? (
      
         <button onClick={()=>setorderbtn(true)} className={styles.button}>CASH ON DELIEVERY!</button> 
      ) : (
         <button onClick={()=>setopen(true)} className={styles.button}>CHECKOUT NOW!</button>          
      )}
      
        </div>
      </div>
      
       {orderbtn && <OrderModule total={cart.total} payment={cart.total} />}
    </div>
  );
};

export default Cart;
