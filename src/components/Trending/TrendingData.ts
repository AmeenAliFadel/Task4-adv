import img1 from '../../assets/img/MostTrending/img1.webp';
import img2 from '../../assets/img/MostTrending/img2.webp';
import img3 from '../../assets/img/MostTrending/img3.webp';
import img4 from '../../assets/img/MostTrending/img4.webp';
import img5 from '../../assets/img/MostTrending/img5.webp';
import img6 from '../../assets/img/MostTrending/img6.webp';

const storedTrendingData = localStorage.getItem('TrendingData');

export const TrendingData = storedTrendingData ? JSON.parse(storedTrendingData) : [
    {
        id: "Trending1",
        img: img1,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    },
    {
        id: "Trending2",
        img: img2,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    },
    {
        id: "Trending3",
        img: img3,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    },
    {
        id: "Trending4",
        img: img4,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    },
    {
        id: "Trending5",
        img: img5,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    },
    {
        id: "Trending6",
        img: img6,
        price:"$300000",
        title: 'Luxury Apartment in California',
        desc: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
    }
];

if (!storedTrendingData) {
    localStorage.setItem('TrendingData', JSON.stringify(TrendingData));
}
