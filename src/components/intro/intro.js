
import "./intro.css";
import emi from "../..img/emi.jpg";



const intro=() => {

return(
     <div className="i">

     <div className="i-left"> Left</div>
     <div className="i-left-wrapper">

      <h2> Hello, My name is </h2>
      <h1 className ="i-name"> Emile Teb </h1>
       <div className= "i-title">
      <div className= "i-title-wrapper" ></div>

      <div className= "i-title-item" >Web Developer</div>
      <div className= "i-title-item" >UI/UX Designer</div>
      <div className= "i-title-item" >Photographer</div>
      <div className= "i-title-item" >Content Creator</div>
      
       </div>
     </div>
   <div className="i-desc">
  I design and develop websites of all kinds; simple to web deriven websites.

   </div>
     <div className="i-right">
        <div className="i.bg"></div>
        <img src = {emi} alt= "" className = "i-img"/>   
        
        </div>
     </div>

)

}
export default intro;