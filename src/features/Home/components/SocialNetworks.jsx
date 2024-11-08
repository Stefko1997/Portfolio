import fbImage from "../../../assets/fbicon.png";
import instImage from "../../../assets/instaicon.jfif";
import twImage from "../../../assets/twittericon.png";
import gitImage from "../../../assets/giticon.png";
import linkImage from "../../../assets/linkedinicon.png";
import "../home.style.css";

const SocialNetworks = () => {
  return (
    <div className="social_networks_links">
      <a href="https://www.facebook.com/" target="blank">
        <img src={fbImage} />
      </a>

      <a href="https://www.facebook.com/" target="blank">
        <img src={instImage} />
      </a>

      <a href="https://www.facebook.com/" target="blank">
        <img src={twImage} />
      </a>

      <a href="https://www.facebook.com/" target="blank">
        <img src={gitImage} />
      </a>

      <a href="https://www.facebook.com/" target="blank">
        <img src={linkImage} />
      </a>
    </div>
  );
};
export default SocialNetworks;
