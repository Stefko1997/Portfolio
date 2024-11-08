import "./home.style.css";
import profilePicture from "../../assets/hool.png";
import SocialNetworks from "./components/SocialNetworks";

const Home = () => {
  return (
    <div className="profile_card">
      <img className="profile_image" src={profilePicture} />
      <h1>
        Hi I am <span>Stefan</span>
      </h1>
      <p>
        I am frontend web developer. I can provide clean code and pixel perfect
        design. I also make website more and more interactive with web
        animation.
      </p>
      <SocialNetworks />
    </div>
  );
};
export default Home;
