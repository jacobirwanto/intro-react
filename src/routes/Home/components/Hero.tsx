import heroImg from "../../../assets/heroimg.png";

function Hero() {
  return (
    <div className="hero-header">
      <img src={heroImg} className="hero-img" />
      <div className="hero-text">Webflow Developer - UI/UX Designer</div>
    </div>
  );
}

export default Hero;
