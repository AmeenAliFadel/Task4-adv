import Title from '../TitleComponent/Title'
import './Trending.css'

import { TrendingData } from './TrendingData'
import TrendingCard from './TrendingCard'
export default function Trending() {
  return (
    <>
      <Title
        title='Most Trending'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
      />
      <div className="container">
        <div className="trending">
          {TrendingData.map((card: { id: string; img: string; price: string; title: string; desc: string }) => (
            <TrendingCard
            key={card.id}
              id={card.id}
              img={card.img}
              price={card.price}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </>
  )
}
