import './Trending.css'
import loction from '../../assets/img/MostTrending/location.svg'

export default function TrendingCard(card: { id: string; img: string; price: string; title: string; desc: string }) {
    return (
        <>
            <div className="trending-card" data-aos="flip-left">
                <img className="trending-card-img" src={card.img} alt="" />
                <div className="trending-card-desc">
                    <h4>{card.price}</h4>
                    <h3>{card.title}</h3>
                </div>
                <div className="trending-card-location">
                    <img src={loction} alt="" />
                    <span>{card.desc}</span>
                </div>
            </div>
        </>
    )
}
