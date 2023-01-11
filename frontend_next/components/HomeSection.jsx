import styles from '../styles/HomeSection.module.css'
import Image from 'next/image'
import hero from '../public/hero.png'

const HomeSection = () => {
  return (
    <>
      <div className='homepage_gradient '>
        <div className={styles.diagonalbox}></div>
        <div className="content flex flex-col md:flex-row m-auto absolute top-[20%] left-[8%] right-[8%]">
          <div className="left_content">
            <p className="left_content_heading text-3xl sm:text-7xl font-bold m-8 text-black">Pixel Perfect Development.</p>
            <p className="left_content_description text-gray-500 text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore, eius omnis ab ipsam officia consectetur minima molestias? Suscipit, blanditiis.</p>
          </div>
          <div className="right_content ">
            <Image className='max-w-1xl' src={hero} alt="hero" width="auto" height="auto"/>
          </div>
        </div>
      </div >
      
    </>
  )
}

export default HomeSection