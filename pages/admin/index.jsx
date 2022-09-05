import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import AddButton from "../../components/Addbutton";
import AddNewPizza from "../../components/AddNewPizza";
import styles from "../../styles/Admin.module.css";

const Index = ({Pizzalist, Orderlist}) => {
    const [pizzalist, setpizzalist] = useState(Pizzalist)
    const [orderlist, setorderlist] = useState(Orderlist)
    const Status = ["preparing", "on the way", "delivered", "Completed"];

//-------- Handling Order Status ---------
const handleStatus = async (id)=>{
  const item = orderlist.filter((customer)=>customer._id === id)[0];
  //  console.log(item.status)
  const currentStatus = item.status;
  
    if(currentStatus < 3){

      try {
        const res = await axios.put(`http://localhost:3000/api/order/${id}`,{
          status: currentStatus+1,
        });
        
        console.log(res.data)
        setorderlist([
          res.data,
          ...orderlist.filter((order)=>order._id !== id),
        ]);
        
      } catch (error) {
        console.log(error)
      }
    }

}

//-------- Deleting a pizza --------
const handleDelete = async (id)=>{
  const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
   setpizzalist(pizzalist.filter((pizza)=>pizza._id !== id));

}

// -------------------- JSX SECTION ----------------------
    return (
      <>
    <AddNewPizza/>
        <div className={styles.container}>
          <div className={styles.item}>
            
            <h1 className={styles.title}>Products</h1>
           
            <table className={styles.table}>
              <tbody>
                <tr className={styles.trTitle}>
                  <th>Image</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tbody>
              {pizzalist.map((product) => (
                <tbody key={product._id}>
                  <tr className={styles.trTitle}>
                    <td>
                      <Image
                        src={product.img}
                        width={50}
                        height={50}
                        objectFit="cover"
                        alt=""
                      />
                    </td>
                    <td>{product._id.slice(0, 5)}...</td>
                    <td>{product.title}</td>
                    <td>${product.prices[0]}</td>
                    <td>
                      <button className={styles.button}>Edit</button>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trTitle}>
                  <th>Id</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {orderlist.map((order) => (
                <tbody key={order._id}>
                  <tr className={styles.trTitle}>
                    <td>{order._id.slice(0, 5)}...</td>
                    <td>{order.customer}</td>
                    <td>${order.total}</td>
                    <td>
                      {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                    </td>
                    <td>{Status[order.status]}</td>
                    <td>
                      <button onClick={() => handleStatus(order._id)}>
                      {/* <button onClick={() => handleStatus(setIndex(++Index))}> */}
                        Next Stage
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        </>
      );
    };

// ------------- fetching all products and orders recrods from database ---------------

export const getServerSideProps = async (ctx)=>{

  const myCookie = ctx.req?.cookies || "";
  console.log(myCookie.token)


  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

    const ProductsRec = await axios.get("http://localhost:3000/api/products");
    const OrdersRec = await axios.get("http://localhost:3000/api/order");

    return{
        props:{
            Pizzalist: ProductsRec.data,
            Orderlist: OrdersRec.data,
        }
    }
}




export default Index;