import "./about.style.css";
import AboutImg from "../../assets/hool.png";

const About = () => {
  return (
    <div className="about_holder">
      <h1>ABOUT ME</h1>
      <div className="about_content">
        <img src={AboutImg} />
        <div className="about_info">
          <h3>
            I am <span className="about_name">Stefan</span>
            <ul>
              <li>
                <span className="info_list">First name</span>:Stefan
              </li>
              <li>
                <span className="info_list">Last name</span>:Stefan
              </li>
              <li>
                <span className="info_list">Age</span>:27
              </li>
              <li>
                <span className="info_list">Nationality</span>:Serb
              </li>
              <li>
                <span className="info_list">Adress</span>:Briga te 99
              </li>
              <li>
                <span className="info_list">Freelance</span>:Isto te briga
              </li>
            </ul>
            <button className="resume_button">DOWNLOAD RESUME</button>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default About;
