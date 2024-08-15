import "./styles/process.css";
const Process=({image,t1,t2})=>{
   return (<div className="process_com_ab">
           <img src={image} width="100vw"/>
           <span className="head_process">{t1}</span>
           <p className="para_process">{t2}</p>
        </div>);
};
export default Process;