import "./index.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SocialIcons from "../../Components/Social_Icons";
import section3_1 from "./assets/section3_1.jpg";
import section3_2 from "./assets/section3_2.jpg";
import section3_3 from "./assets/section3_3.jpg";
import section3_4 from "./assets/section3_4.jpg";
import section3_5 from "./assets/section3_5.jpg";
import indiamap from "./assets/india_map.png";
import search from "./assets/search.png";
function Project(){
    return (
        <>
        <div>
        <Navbar/>
        <div className="head_pd">
            <div className="head_pd_2">
            <h1>Search and Filter</h1>
                <form className="select_pd">
                <select className="cars">
                      <option >Select Project Name</option>
                      <option>Green India Mission</option>
                      <option>MGNREGA Tree Plantation</option>
                      <option>PMKSY Green Cover</option>
                      <option>Van Mohotsav</option>
                      <option>Bharat Nirman Programme</option>
                      <option>Green Belt Movement</option>
                      <option>REGP Tree Plantation</option>
                </select>
                <select className="cars">
                      <option >Select State</option>
                      <option >Uttarakhand</option>
                      <option>Uttar Pradesh</option>
                      <option >Gujarat</option>
                      <option >Rajasthan</option>
                      <option >Bihar</option>
                      <option >Punjab</option>
                </select>
                <select name="cars" className="cars">
                      <option >Select City</option>
                      <option>Lucknow</option>
                      <option>Varanasi</option>
                      <option >Mathura</option>
                      <option >Agra</option>
                      <option >Prayagraj</option>
                      <option >Jaipur</option>
                      <option>Ahemdabad</option>
                </select>
                <select className="cars">
                      <option >Project Type</option>
                      <option >NGO</option>
                      <option>Corporate</option>
                      <option >Government</option>
                </select>
                <div className="search_pd"><img src={search} width="30vw"/></div>
                </form>
            </div>
        </div>
        <br/>
        <SocialIcons/>
        <div className="section2_pd"><h1>PROJECT LISTINGS</h1><hr style={{
                  width: '40%', 
                  margin: '0 auto',
                  borderTop: '1px solid grey' 
              }} />
        </div>
        <div className="section3_pd">
        <div className="section3_pd_comp">
            <img src= {section3_1}/>
            <div className="section3_pd_comp_2">
                <h1>1. Green India Mission</h1>
            <p>
            <b>Objective:</b> Enhance environmental sustainability and combat climate change
through afforestation and reforestation.
<b>Key Features: </b> 
Part of the National Action Plan on Climate Change.
Aims to increase forest cover and improve ecological balance.
<b>Scope:</b> Nationwide, focusing on both urban and rural areas.
            </p>
            </div>
        </div>
        <div className="section3_pd_comp_even">
            <div className="section3_pd_comp_2_even">
                <h1>2. MGNREGA Tree Plantation</h1>
            <p>
            <b>Objective: </b>Integrate tree planting with rural employment schemes to 
provide jobs and enhance green cover.
<b>Key Features: </b>
Employment generation through afforestation.
Promotes sustainable development in rural areas.
<b>Scope: </b> Implemented across rural India under the MGNREGA scheme.
            </p>
            </div>
            <img src= {section3_2} />
        </div>
        <div className="section3_pd_comp">
            <img src= {section3_3} />
            <div className="section3_pd_comp_2">
                <h1>3. PMKSY Green Cover</h1>
            <p>
            <b>Objective:</b> Improve irrigation infrastructure while promoting tree plantation to 
            enhance agricultural productivity and environmental health.
<b>Key Features: </b> 
Tree planting as part of irrigation and water management projects.
Focuses on integrating green cover with agricultural practices.
<b>Scope:</b> Rural areas with an emphasis on agricultural land.
            </p>
            </div>
        </div>
        <div className="section3_pd_comp_even">
            <div className="section3_pd_comp_2_even">
                <h1>4.Van Mahotsav</h1>
            <p>
            <b>Objective: </b>Promote tree planting through a national event to
            encourage environmental awareness.
<b>Key Features: </b>
Annual tree-planting drive in July.
Engages communities, schools, and organizations in
 tree planting activities
<b>Scope: </b> Nationwide participation.
            </p>
            </div>
            <img src= {section3_4} />
        </div>
         <div className="section3_pd_comp">
            <img src= {section3_5} />
            <div className="section3_pd_comp_2">
                <h1>5.Bharat Nirman Programme</h1>
            <p>
            <b>Objective:</b> Improve rural infrastructure while incorporating green cover initiatives.
<b>Key Features: </b> 
Focuses on infrastructure development in rural areas.
Includes tree planting as a component for environmental sustainability.
<b>Scope:</b> Rural India, with a focus on infrastructure projects.
            </p>
            </div>
        </div>
       </div>
       <div className="section2_pd"><h1>Plantation of trees in different states</h1><hr style={{
                  width: '70%', 
                  margin: '0 auto',
                  borderTop: '1px solid grey' 
              }} />
        </div>
        <br/>
        <div className="last_pd">
            <img src={indiamap}/>
        </div>
       <Footer/>
       </div>
       </>);}

export default Project;