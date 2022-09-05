import Image from "next/image";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.item}>
        
        <Image src="/img/bg.webp" layout="intrinsic" width={380} height={500} alt="" />
       
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE <span style={{color: 'orange'}}>HKB PIZZA</span> , WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              charsadda chowk, Mardan
            <br /> KPK Pakistan
            <br /> (0922) 867-1010
          </p>
          <p className={styles.text}>
              College chowk, Mardan
            <br /> KPK Pakistan
            <br /> (0922) 866-1010
          </p>
          <p className={styles.text}>
              Pakistan chowk, Mardan
            <br /> KPK Pakistan
            <br /> (0922) 868-1010
          </p>
          <p className={styles.text}>
              Nowshera, Mardan
            <br /> KPK Pakistan
            <br /> (0922) 869-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00am – 10:00pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00pm – 12:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
