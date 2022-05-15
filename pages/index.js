import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{minHeight:'100vh',position:'relative'}}>
      <Image src="/home-bg.jpg" layout="fill" objectFit='cover' style={{opacity:0.1,filter:'grayscale(100%)'}} />
      <Head>
        <title>Hometown Renovations | Windham, New Hampshire</title>
      </Head>

      <main style={{fontFamily:"'Bebas Neue', cursive", color:'#333',position:'relative',padding:'2rem'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',minHeight:'100vh'}}>
          <h1 style={{fontSize:'4rem',lineHeight:'4rem',borderBottom:'1px solid #ccc',paddingBottom:'3rem',marginBottom:'1rem'}}>
            Hometown Renovations
          </h1>
          <div style={{textAlign:'center'}}>
            <h2 style={{fontSize:'1.65rem',letterSpacing:'1px',color:'#666',marginBottom:'0'}}>CONTACT INFORMATION</h2>
            <div style={{backgroundColor:'rgba(255,255,255,0.75)',padding:'2rem 3rem',borderRadius:'10px',marginTop:'1rem'}}>
              <h3 style={{fontSize:'1.5rem',marginTop:0,marginBottom:'0.5rem'}}>Derek Thornton</h3>
              <div style={{fontSize:'1.3rem',marginBottom:'0.5rem'}}>
                <a style={{color:'#3b82f6'}} href="tel:603-552-8337">603-552-8337</a>&nbsp;&nbsp;or&nbsp;&nbsp;<a style={{color:'#3b82f6'}} href="tel:603-560-4866">603-560-4866</a></div>
              <div style={{fontSize:'1.3rem'}}>
                60 Rockingham Rd Unit 12
                Windham, NH 03087
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
