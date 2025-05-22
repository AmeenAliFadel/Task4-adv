import './Hero.css'
import back from "../../assets/img/hero/background.webp"
import location from '../../assets/img/hero/location.svg'
import home from '../../assets/img/hero/house.svg'
import dollar from '../../assets/img/hero/dollar-circle.svg'

export default function Hero(Props: {title:string; desc:string}) {

  const heroData = [
    {
      id:1,
      img: location,
      title: "Location",
      desc: "Ahmedabad, India",
    },
    {
      id:2,
      img: home,
      title: "Price",
      desc: "$1000 - $10,000",
    },
    {
      id:3,
      img: dollar,
      title: "Type of Property",
      desc: "Apartment",
    },
  ]
  return (
    <>
      <div className="hero" data-aos="fade-up">

        <div className="hero-title">
          <h1>{Props.title}</h1>
          <p>{Props.desc}</p>
        </div>
        <div className="hero-box">

          {heroData.map((item) => (
            <div key={item.id} className="hero-item">
              <div className="hero-item-img-box">
                <img src={item.img} alt="" />
              </div>
              <div className="hero-item-desc">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='hero-img-container'>
          <img className='hero-img' src={back} alt="" />
        </div>
      </div>
    </>
  )
}
