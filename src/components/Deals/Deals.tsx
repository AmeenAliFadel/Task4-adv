import { useState } from 'react';
import Title from '../TitleComponent/Title';
import './Deals.css';
import { DealsData } from './DealsData';

const tabs = ['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property'];

export default function Deals() {
  const [activeTab, setActiveTab] = useState(0);

  const getDealsForTab = (index: number) => {
    if (index === 0) return DealsData.slice(0, 3);
    if (index === 1) return DealsData.slice(3, 6);
    if (index === 2) return DealsData.slice(6, 8);
    if (index === 3) return DealsData.slice(8, 10);
    return [];
  };

  const filteredDeals = getDealsForTab(activeTab);

  return (
    <>
      <Title
        title="Best Real Estate Deals"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="container">
        <div className="deals">
          <div className="deals-scroll">
            <div className="deals-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={activeTab === index ? 'active' : ''}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>


          <div className="deals-cards">
            {filteredDeals.map((deal: { id: string; img: string; }) => (
              <div data-aos="flip-left" className="deals-card" key={deal.id}>
                <img src={deal.img} alt="" />
                <div className="deals-img-icons">
                  <span>Featured</span>
                  <span>3D</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
