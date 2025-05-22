import icon1 from '../../assets/img/howItWorks/icon1.svg';
import icon2 from '../../assets/img/howItWorks/icon2.svg';
import icon3 from '../../assets/img/howItWorks/icon3.svg';

const storedHowItWorksData = localStorage.getItem('HowItWorksData');

export const HowItWorksData = storedHowItWorksData ? JSON.parse(storedHowItWorksData) : [
    {
        id: "how1",
        icon: icon1,
        title: 'Search Apartment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id: "how2",
        icon: icon2,
        title: 'Select Apartment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id: "how3",
        icon: icon3,
        title: 'Confirm Apartment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    }
];

if (!storedHowItWorksData) {
    localStorage.setItem('HowItWorksData', JSON.stringify(HowItWorksData));
}
