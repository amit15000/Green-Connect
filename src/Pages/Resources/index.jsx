import "./index.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SocialIcons from "../../Components/Social_Icons";
import section1_1 from "./assets/section2_1.jpg";
import Process from "../../Components/process";
import note from "./assets/note.jpg";
import scholar from "./assets/scholar.jpg";
import book from "./assets/book.jpg";
import handbook from "./assets/hand_book.jpg";
import section3_1 from "./assets/section3_1.jpg";
import section3_2 from "./assets/section3_2.jpg";
import section3_3 from "./assets/section3_3.jpg";
import section3_4 from "./assets/section3_4.jpg";
import section4_1 from "./assets/section4_1.jpg";
import section4_2 from "./assets/section4_2.jpg";
import section4_3 from "./assets/section4_3.jpg";
import section4_4 from "./assets/section4_4.jpg";
import section4_5 from "./assets/section4_5.jpg";
import S4child from "../../Components/Resources_s4";

const Resources=()=>{
    return (
        <>
        <Navbar/>
        <div className="header_rsc">
            <h1>RESOURCES</h1>
            <p>Welcome to the Resources section of Green Connect, your go-to hub for knowledge, tools, and best practices in urban forestry and sustainability.Whether you're an individual looking to get involved, an organization seeking valuable insights, or a stakeholder wanting to share expertise, you'll find everything you need here to make an impact.</p>
        </div>
        <SocialIcons/>
        <div className="section2_rsc">
            <img src={section1_1} className="section2_rsc_img" width="20%"/>
            <div className="section2_1_rsc">
            <h2>Knowledge Hub</h2>
            <p>Discover and Learn: Dive into our comprehensive Knowledge Hub to access a wealth of information on urban
            forestry, environmental sustainability,and related topics. Here, you can find:</p>
            </div>
            <div className="section2_2_rsc">
            <Process image={note} t1="Articles:" t2="In-depth pieces covering the latest research, case studies, and trends in sustainability and urban forestry."/>
            <Process image={scholar} t1="Guides:" t2="Step-by-step manuals on how to implement green practices, manage projects, and navigate regulations."/>
            <Process image={book} t1="Tutorials:" t2="Interactive learning resources designed to build your skills and knowledge in areas such as planting techniques, project management, and impact measurement."/>
            <Process image={handbook} t1="Workshops:" t2="Information on upcoming and past workshops, webinars, and seminars that offer practical, hands-on learning experiences."/>
            </div>
        </div>
        <div className="section2_rsc colorwhite">
        <h2>Explore Categories</h2>
        <div className="section2_2_rsc">
            <Process image={section3_1} t1="Urban Forestry Practices:" t2="Tips and strategies for enhancing green spaces in urban environments."/>
            <Process image={section3_2} t1="Sustainability Initiatives:" t2="Best practices and innovative approaches for promoting sustainability in various sectors."/>
            <Process image={section3_3} t1="Project Management:" t2="Guidance on managing and executing environmental projects effectively."/>
            <Process image={section3_4} t1="Policy and Advocacy:" t2="Resources on influencing policy and advocating for environmental causes."/>
            </div>
        </div>
        <div className="section4_rsc">
                 <S4child image={section4_1} t1="TOOL BOX" t2="Essential Tools and Best Practices: Our Toolbox is designed to equip you with the practical tools 
and methodologies needed to drive effective projects and initiatives. This section includes:
Tool Descriptions: Detailed information about various tools and resources available for project planning, 
        implementation, and monitoring. 
Examples include software for project management, data analysis tools, and communication platforms.
Download Links: Access downloadable resources such as templates, checklists, and software that can aid
         in project execution.
Access Options: Links to online platforms and resources where you can utilize the tools directly or request access.
"/>
<S4child image={section4_2} t1="Featured Tools:" t2="Project Management Software: Tools for planning, tracking, and managing projects efficiently.
Impact Measurement Tools: Resources for assessing and reporting the impact of your projects.
Collaboration Platforms: Solutions for facilitating communication and collaboration among stakeholders.
"/>
<S4child image={section4_3} t1="Best Practices:" t2="Learn from the experiences of others by exploring best practices for successful project 
implementation, stakeholder engagement
and resource management. This section highlights strategies that have proven effective in various contexts.
Get Involved
"/>
<S4child image={section4_4} t1="Contribute and Share: " t2="We encourage you to share your knowledge and resources with the Green Connect community. If you have articles, guides,
 or tools that could benefit others, you can submit them for inclusion in our Knowledge Hub and Toolbox.
Get Involved
"/>
<S4child image={section4_5} t1="Submit Resources: " t2="
Share your insights and expertise by contributing articles or guides related to sustainability and urban forestry.
Recommend Tools: Suggest tools and resources that have been effective in your projects or initiatives.
By providing a centralized hub for information and tools, the Resources section of Green Connect aims to empower users with the knowledge
 and capabilities they need to drive positive environmental change. Explore, learn, and contribute to make a meaningful impact!
Feel free to adjust or expand on this content based on the specific needs and focus areas of Green Connect.
"/>
        </div>
        <Footer/>
        </>
    )
};
export default Resources; 