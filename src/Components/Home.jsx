import React, {useState, useEffect} from 'react'
import { useRef } from 'react'
import { FaBars, FaCartPlus, FaSearch, FaUser, FaHeart, FaStar, FaStarHalf, FaStarAndCrescent, FaStarHalfAlt, FaStarOfDavid, FaStarOfLife, FaStackOverflow, FaRegStar, FaFacebook, FaInstagram, FaTwitter, FaTimes} from 'react-icons/fa'
import './Home.css'
import { Link } from 'react-router-dom'
import Pics1 from '../assets/img_product_cover_5.png'
import Pics2 from '../assets/img_product_cover_5_238x182.png'
import Pics3 from '../assets/img_product_cover_5_1.png'
import Pics4 from '../assets/img_product_cover_5_2.png'
import Pics5 from '../assets/img_product_cover_5_3.png'
import Pics6 from '../assets/product-cover-5.png'
import Pics7 from '../assets/img_product_cover_5_5.png'
import Pics8 from '../assets/img_product_cover_5_6.png'
import Pics9 from '../assets/img_product_cover_5_7.png'
import Pics10 from '../assets/img_product_cover_5_8.png'
import Icon2 from '../assets/icon cool-icon-1153.svg'
import Icon1 from '../assets/icon cool-icon-153.svg'
import Icon from '../assets/icon cool-icon-125.svg'
import FEA1 from '../assets/img_unsplash_hhdhcfaifhu.png'
import FEA2 from '../assets/img_unsplash_tveqstc2uz8.png'
import FEA3 from '../assets/img_unsplash_degu_ocub1y.png'
import Userimg from '../assets/img_user_1-removebg-preview.png'
import Mult1 from '../assets/unsplash_QANOF9iJlFs.png'
import Mult2 from '../assets/img_unsplash_ah7yixwrtks.png'
import Mult3 from '../assets/img_unsplash_6_dx4h4yi1y.png'
import Mult4 from '../assets/img_unsplash_ghztzvllodq.png'
import Mult5 from '../assets/img_unsplash_uutouxqaexk.png'
import Mult6 from '../assets/img_unsplash_rhn8ff1g_qy.png'
import Mult7 from '../assets/img_unsplash_jo40qkbxup0.png/'
import Mult8 from '../assets/img_unsplash_qlga5zv3doo.png'
import Mult9 from '../assets/img_unsplash_1r1echv4i0y.png'

const Home = () => {
  const navRef= useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    <React.Fragment>
   

  <header>
    <h3 className='logo'>Bandage</h3>
    <nav ref={navRef}>
      <a href="/">Home</a>
      <a href="">Product</a>
      <a href="">Pricing</a>
      <a href="/shop">Shop</a>
      <a href="">About</a>
      <a href="">Blog</a>
      <a href="">Contact</a>
      <a href="">Pages</a>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
      </button>
    </nav>
    <button className='bars' onClick={showNavbar}>
      <FaBars/>
    </button>
     <div className='search'>
            <button className='user'>
                <h3>  <FaUser/>  Login / Register</h3>
            </button>
            <button className='cart'>
                <FaSearch/>
                <FaCartPlus/>1
                <FaHeart/>1
            </button> 
             
        </div>
  </header>
      
<div className='heropage'>
    <div className='mini1'>
    <p>5 Items </p>
    <h3>Furniture</h3>
    <a href=""className='links'>Read More</a>
    </div>
    <div className='mini2'>
      <div className='mini3'>
      <p>5 Items </p>
    <h3>Furniture</h3>
    <a href=""className='links'>Read More</a>
      </div>
      <div className='mini4'>
      <div className='mini5'>
      <p>5 Items </p>
    <h3>Furniture</h3>
    <a href=""className='links'>Read More</a>
      </div>
      <div className='mini6'>
      <p>5 Items </p>
    <h3>Furniture</h3>
    <a href=""className='links'>Read More</a>
      </div>
      </div>
      
    </div>
</div>

  
    {/* product */}
    <div className='main-container'>
     <div className='feature'>
        <h3 className='H3'>Featured Products</h3>
        <h1 className='H1'>BESTSELLER PRODUCTS</h1>
        <p className='P'>Problems trying to resolve the conflict between</p>
     </div>
     <div className='main-container1'>
     <div className='small-box'>
        <img src={Pics1} alt="" />
        <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
     <img src={Pics2} alt="" />
     <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
     <img src={Pics3} alt="" />
     <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics4} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics5} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics6} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics7} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics8} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
         <img src={Pics9} alt="" />
         <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     <div className='small-box'>
     <img src={Pics10} alt="" />
     <h4 className='H4'>Graphic Design</h4>
        <p className='eng'>English Department</p>
        <h5 className='H5'>$16.48 <i>$6.48</i></h5>
     </div>
     </div>
     <div className='load'>Load More Product</div>
</div>
{/* services */}
<div className='serve-container'>
     <div className='serve'>
        <h4 className='Fea'>Featured Products</h4>
        <h1 className='the'>The Best Services</h1>
        <p className='pro'>Problems trying to resolve the conflict between</p>
     </div>
     <div className='ICO'>
      <div className='ICON'>
        <img src={Icon2} alt="" className='IMg' />
        <h3 className='easy'>Easy Wins</h3>
        <p className='smile'>Get your best looking smile now</p>
      </div>
      <div className='ICON'>
        <img src={Icon1} alt="" className='IMg'/>
        <h3 className='concrete'>Concrete</h3>
        <p className='def'>Defaicate is most focused in helping you discover your most beautiful smile</p>
      </div>
      <div className='ICON'>
        <img src={Icon} alt="" className='IMg'/>
        <h3 className='hack'>Hack Growth</h3>
        <p className='over'>Overcome any hurdle or any other problem</p>
      </div>
     </div>
  </div>
  {/* fratured */}
  <div className='Fea-container'>
  <div className='prfe'>
    <h4 className='prac'>Practice Advice</h4>
    <h1 className='fepos'>Featured Products</h1>
  </div>
  <div className='fea-pics'>
    <div className='fea-box'>
        <img src={FEA1} alt="" className='fine'/> 
        <div  className='go'>
        <p className='goo'>Google</p>
        <p>Trending</p>
        <p>New</p>
        </div>
        <div>
        <h2 className='Loud'>Loudest a la Maidson #1 (L'integral)</h2>
        <p className='we'>We focus on ergonomics and meeting you where you work. its only a keystroke away. </p>
        </div>
      
        <div className='com'>
        <p>22 April 2021</p>
        <p>10 comments</p>
        </div>
        <div className="LEA"> <a href="" className='lea'>Learn More</a> </div>
    </div>
    <div className='fea-box'>
        <img src={FEA2} alt="" className='fine'/>
        <div  className='go'>
        <p className='goo'>Google</p>
        <p>Trending</p>
        <p>New</p>
        </div>
        <div>
        <h2 className='Loud'>Loudest a la Maidson #1 (L'integral)</h2>
        <p className='we'>We focus on ergonomics and meeting you where you work. its only a keystroke away. </p>
        </div>
        <div className='com'>
        <p>22 April 2021</p>
        <p>10 comments</p>
        </div>
        <div className="LEA"> <a href="" className='lea'>Learn More</a> </div>
    </div>
    <div className='fea-box'>
        <img src={FEA3} alt="" className='fine'/>
        <div  className='go'>
        <p className='goo'>Google</p>
        <p>Trending</p>
        <p>New</p>
        </div>
        <div>
        <h2 className='Loud'>Loudest a la Maidson #1 (L'integral)</h2>
        <p className='we'>We focus on ergonomics and meeting you where you work. its only a keystroke away. </p>
        </div>
        <div className='com'>
        <p>22 April 2021</p>
        <p>10 comments</p>
        </div>
       <div className="LEA"> <a href="" className='lea'>Learn More</a> </div>
    </div>
    
  </div>
 

</div>
{/* multiplepics */}
<div className='mult-container'>
    <div className='semi-mult'>
      <h3 className='what'>What they say about us</h3>
      <div className='mult-img'>
        <img src={Userimg} alt="" className='userimg'/>
        <FaStar className="red-icon" />
        <FaStar className="blue-icon" />
        <FaStar className="green-icon" />
        <FaStar className="yellow-icon" />
        <FaRegStar className="purple-icon" />
      </div>
      <p className='slate'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      <h4 className='Regina'>Regina Miles</h4>
      <h4 className='Desi'>Designer</h4>
    </div>
    <div className='semi-mulT'>
         <div className='smal-pics'>
            <img src={Mult1} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult2} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult3} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult4} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult5} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult6} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult7} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult8} alt="" className='one'/>
         </div>
         <div className='smal-pics'>
            <img src={Mult9} alt="" className='one'/>
         </div>


    </div>

</div>
 {/* mainbackground */}
<div className='background'>
  <h4 className='DESA'>Designing Better Experience</h4>
  <h1 className='prop'>Problems trying to resolve the conflict between</h1>
  <p className='sma-pro'>Problems trying to resolve the conflict between the two major realms of Classical physics</p>
  <h3 className='numb'>$16.48</h3>
  <button className='sma-bot'>ADD YOUR CALL TO ACTION</button>
</div>

{/* bandage-bottom */}

<div className='band'>
    <div>
     <h3 className='BAND'>Bandage</h3>
    </div>
    <div className='icons-sma'>
     <FaFacebook className='Blue-icon'/>
     <FaInstagram className='Blue-icon'/>
     <FaTwitter className='Blue-icon'/>
    </div>
</div>

{/* footer */}
<footer className='footer'>
  <table>
    <thead>
    <tr>
        <th>Company Info</th>
        <th>Legal</th>
        <th>Features</th>
        <th>Resources</th>
      
      </tr>
      </thead>
      <tbody>
  
    <tr>
        <td>About Us</td>
        <td>About Us</td>
        <td>Business Marketing</td>
        <td>IOS & Android</td>
       
      </tr>
      <tr>
        <td>Carrier</td>
        <td>Carrier</td>
        <td>User Analytic</td>
        <td>Watch a Demo</td>
      </tr>
      <tr>
        <td>We are thinking</td>
        <td>We are thinking</td>
        <td>Live chat</td>
        <td>Customers</td>
      </tr>
      <tr>
        <td>Blog</td>
        <td>Blog</td>
        <td>Unlimited</td>
        <td>API</td>
 
      </tr>
      </tbody>

    
     
  
  </table>

  <div className='inp'>
  
   <h4>Get In Touch</h4>
          <input type="text" placeholder='Your Email' className='input'/>
          <button className='boton'>Subscribe</button>
          <p className='lor'>Lorem ipsum dolor sit amet.</p>
        

  </div>
</footer>
  <div className='Made'>
    <p>Made with love by finland all right reserved</p>
  </div>
   
    </React.Fragment>
  
  
  )
}


export default Home