import Title from '../TitleComponent/Title'
import './HowItWorks.css'
import HowItWorksCard from './HowItWorksCard';

import { HowItWorksData } from './HowItWorksData'

export default function HowItWorks() {
  return (
    <>
      <Title
        title='How it Works'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
      />
      <div className="container">
        <div className="how-it-works">
          {HowItWorksData.map((how: { id: string; icon: string; title: string; desc: string }) => (
            <HowItWorksCard
              key={how.id}
              id={how.id}
              icon={how.icon}
              title={how.title}
              desc={how.desc}
            />
          ))}
        </div>
      </div>
    </>
  )
}
