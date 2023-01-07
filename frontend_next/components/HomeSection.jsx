import styles from '../styles/HomeSection.module.css'
import Image from 'next/image'


// import '../public/static/query'




const HomeSection = () => {
  return (

    <div className={styles.diagonalbox}>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.diva}>
            <h1>Pixel Perfect</h1>
            <h1>Dev</h1>
          </div>
          <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac habitasse. Semper risus in hendrerit gravida rutrum quisque non. Elit scelerisque mauris pellentesque pulvinar. Justo eget magna fermentum iaculis eu. </p>
          </div>
        </div>
        <div className={styles.head1}>
          <img src='/illustration.png'></img>
        </div>

      </div>
    </div >








  )
}

export default HomeSection