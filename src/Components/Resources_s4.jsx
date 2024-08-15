import "./styles/resources_s4.css";
const S4child=({image,t1,t2})=>{
    return (<>
         <div className="child_s4">
             <img src={image}/>
             <div className="para_s4_rsc">
               <h2>{t1}</h2>
               <p>{t2}</p>
             </div>
         </div>
    </>);
}
export default S4child;