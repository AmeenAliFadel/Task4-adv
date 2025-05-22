import img1 from '../../assets/img/RealDeals/img1.webp';
import img2 from '../../assets/img/RealDeals/img2.webp';
import img3 from '../../assets/img/RealDeals/img3.webp';
import img4 from '../../assets/img/MostTrending/img1.webp';
import img5 from '../../assets/img/MostTrending/img2.webp';
import img6 from '../../assets/img/MostTrending/img3.webp';
import img7 from '../../assets/img/MostTrending/img4.webp';
import img8 from '../../assets/img/MostTrending/img5.webp';

const storedDealsData = localStorage.getItem('DealsData');

export const DealsData = storedDealsData
    ? JSON.parse(storedDealsData)
    : [
        {
            id: 'Deal1',
            img: img1
        },
        {
            id: 'Deal2',
            img: img2
        },
        {
            id: 'Deal3',
            img: img3
        },
        {
            id: 'Deal4',
            img: img4
        },
        {
            id: 'Deal5',
            img: img5
        },
        {
            id: 'Deal6',
            img: img6
        },
        {
            id: 'Deal7',
            img: img7
        },
        {
            id: 'Deal8',
            img: img8
        },
        {
            id: 'Deal9',
            img: img2
        },
        {
            id: 'Deal10',
            img: img1
        },
    ];

if (!storedDealsData) {
    localStorage.setItem('DealsData', JSON.stringify(DealsData));
}
