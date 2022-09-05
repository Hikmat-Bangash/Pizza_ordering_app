import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
const OrderModule = ({ total, payment }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();


  const handleClick = async () => {
   

   const response = await axios
      .post("http://localhost:3000/api/order", {
        customer,
        address,
        total,
        payment,
      });

      if(response.status == 201){
        // window.alert(`${response.data._id}`);
        router.push(`/order/${response.data._id}`)
      }
      
      if(response.status == 501){
          window.alert(response)
      }
  };

  // --------- JSX SECTION -----------
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
           <div className={styles.closebtn}>
            X
           </div>
          <h1 className={styles.title}>You will pay $12 after delivery.</h1>
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
            <input
              placeholder="John Doe"
              type="text"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="text"
              placeholder="+1 234 567 89"
              className={styles.input}
            />
          </div>

          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Elton St. 505 NY"
              type="text"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
            <button className={styles.button} onClick={handleClick}>
              Order
            </button>
        </div>
      </div>
    </>
  );
};

export default OrderModule;
