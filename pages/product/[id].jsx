import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/CardSlice";
import {toast} from 'react-toastify';


const Product = ({pizza}) => {
  
  const dispatch = useDispatch();

  const [size, setsize] = useState(0);
  const [price, setprice] = useState(pizza.prices[0]);
  const [extras, setextras] = useState([]);
  const [Quantity, setQuantity] = useState(1)

//--------- changing pizza prize according to size
const ChangePrice = (number)=>{
    setprice(price + number)
}

// ----------- HandleClick for size of pizza -----
const handleSize = (sizeIndex)=>{
  // for the first lets check the difference and make structure for increasing price with click
  const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setsize(sizeIndex);
   ChangePrice(difference)
}

  //------------- handleChange Section ---------
  const handleChange = (e,option)=>{
     const checked = e.target.checked;
     console.log(e.target.name)
     if(checked){
     ChangePrice(option.price)
     setextras([...extras, option])
     }
     else{
      ChangePrice(-option.price)
      setextras(extras.filter((x)=>x._id !== option._id));
     }
  }

  // -------- AddToCardBtn method definition ------
  const AddToCardBtn =()=>{
   
     dispatch(addProduct({...pizza, extras, price, Quantity}))

     toast.success("Product successfully added",{
      autoClose: 3000
     })
  }


//---------- JSX SECTION --------------
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOption.map((option)=>(
            <div className={styles.option} key={option._id}>
            <input
              type="checkbox"
              id={option.text}
              name={option.text}
              className={styles.checkbox}
              onChange={(e)=>handleChange(e,option)}
              />
            <label htmlFor={option.text}>{option.text}</label>
          </div>
            ))}
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} minLength={1} className={styles.quantity} onChange={(e)=>setQuantity(e.target.value)} />
            <button className={styles.button} onClick={AddToCardBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;


// ------------ To fetch product from database ---------------------------
export const getServerSideProps = async ({params})=>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return{
    props:{
      pizza: res.data,
    }
  }
}