import React from 'react'
import image1 from './img/carousel-1.jpg'
import image2 from './img/frontimg.avif'
import image3 from './img/pexels-emily-ranquist-493228-1205651.jpg'
import './css/style.css'
import Course from './Course'

const Home = () => {
  return (
    <div className='homephoto' >
   
      <div className="homeimg" style={{display:"flex", width:"100%",justifyContent:"center"}}>  <img src={image3} alt="none" id="frontimg" style={{ borderRadius:"10px",marginTop:"5px", width:"80%"}}/></div>
      
        <p style={{fontFamily:"times-new-roman,",fontSize:"15px", textAlign:"center", marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, perspiciatis! Vero enim fugiat excepturi labore dicta modi nulla dolorem quia reiciendis in sed, commodi sit. Dicta atque doloremque quos laborum.
        Ex quis vitae quisquam assumenda. Quaerat nobis vero voluptatum dolorum tenetur est quos odit incidunt doloremque ad repudiandae veniam officia maiores neque, eaque, mollitia voluptate. Maiores sit adipisci ut fugiat.
        Praesentium minus nulla quibusdam itaque corrupti suscipit expedita iusto quaerat vel eius delectus error exercitationem quas fugiat minima aspernatur voluptatem ut dicta quae voluptate cumque nisi, provident perferendis. Obcaecati, repellat.
        Maxime, tempora, voluptates provident omnis, molestias maiores hic repellat et ea ad quasi quisquam dolores! Eligendi vitae corrupti quibusdam maxime eveniet placeat corporis autem rem aspernatur mollitia, ad temporibus repellendus?
        Vitae tempore harum molestias tenetur molestiae, consequuntur nulla illo inventore assumenda perspiciatis voluptate, neque fugit, quam sunt ratione facilis quis libero odio temporibus. Cum neque quo voluptatibus animi, est at?
        Illo vel earum totam id, repudiandae aperiam quibusdam, explicabo voluptatibus expedita nostrum debitis neque sapiente, labore velit adipisci! Aspernatur voluptates in quidem corrupti harum tempore deserunt distinctio doloribus et praesentium.
        Praesentium maxime quia, magni vitae eaque recusandae voluptates, impedit tempora iure, eligendi ducimus! </p>
        <Course/>

    </div>
  
  )
}

export default Home
