import React, { useEffect, useMemo, useState } from 'react';
import '../../scss/homepage/homepage.scss';
import BrandSwiper from './components/BrandSwiper';
import { ItemShowcaseList } from './components/ItemShowcaseList';
import HalloweenBanner from '../../images/banner_halloween.png';
import { itemImageMapping } from '../../config/item_image_mapping';

function HomePage() {
  const baseUrl = 'http://localhost:8080';
  const [products, setProducts] = useState([]);

  const NUMBER_JUST_DROPPED_ITEMS = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/product/groupByName`);
        const data = await res.json();

        setProducts(data.data);
      } catch (e) {}
    };

    fetchProducts();
  }, []);

  const newArrivalItems = useMemo(() => {
    return products.map((product) => ({
      name: product.name,
      price: Number(product.averagePrice.toFixed(2)),
      imageUrl: itemImageMapping[product.name].snippetImage,
    }));
  }, [products]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getRandomElementsFromArray(array, numElements) {
    if (numElements >= array.length) {
      const shuffledArray = [...array];
      shuffleArray(shuffledArray);
      return shuffledArray;
    }

    const shuffledArray = [...array];
    shuffleArray(shuffledArray);
    return shuffledArray.slice(0, numElements);
  }

  const justDroppedItems = useMemo(() => {
    const items = getRandomElementsFromArray(
      products,
      NUMBER_JUST_DROPPED_ITEMS
    );
    return items.map((item) => ({
      name: item.name,
      price: Number(item.averagePrice.toFixed(2)),
      imageUrl: itemImageMapping[item.name].snippetImage,
    }));
  }, [products]);

  return (
    <div>
      <div className={'banner'}>
        <img className="banner-homepage" src={HalloweenBanner} alt={''} />
      </div>
      <div className="body-homepage">
        <BrandSwiper />
        <div className="promote-block">
          <div>
            <h1 className="promote-block__title">New Arrival</h1>
            <p className="promote-block__sub-title">
              All Shoes already ready to ship! Don’t hesitate to buy it
            </p>
          </div>
          <ItemShowcaseList items={newArrivalItems} />
          <div className={'just-drop'}>
            <div className={'just-drop__text'}>JUST DROPPED</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4 12.5H20M20 12.5L14 18.5M20 12.5L14 6.5"
                stroke="#252525"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ItemShowcaseList items={justDroppedItems} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
