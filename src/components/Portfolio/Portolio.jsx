import React, { useState } from 'react';
import portfolioCard1 from "../../assets/images/portfolioCard1.png"
import portfolioCard2 from "../../assets/images/portfolioCard2.png"
import "../../assets/styles/components/global.scss"

const Portfolio = () => {
  const [category, setCategory] = useState('all');

  const portfolioItems = [
    { title: 'All', category: 'all', image: portfolioCard1, description: 'This is a web category portfolio item.' },
    { title: 'UI', category: 'ui', image: portfolioCard2, description: 'This is a UI category portfolio item.' },
    { title: 'UI', category: 'ui', image: portfolioCard2, description: 'This is a UI category portfolio item.' },
    { title: 'UI', category: 'ui', image: portfolioCard2, description: 'This is a UI category portfolio item.' },
    { title: 'Code', category: 'code', image: portfolioCard1, description: 'This is a code category portfolio item.' },
    { title: 'Development', category: 'development', image: portfolioCard2, description: 'This is a development category portfolio item.' },
    { title: 'Development', category: 'development', image: portfolioCard2, description: 'This is a development category portfolio item.' },
  ];

  const filterPortfolio = (category) => {
    setCategory(category);
  };

  let filteredItems;

  if (category === 'all') {
    const uniqueCategories = ['ui', 'code', 'development'];
    filteredItems = uniqueCategories.map(uniqueCategory => portfolioItems.find(item => item.category === uniqueCategory));
  } else {
    filteredItems = portfolioItems.filter(item => item.category === category);
  }

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="filterSort">
        <div className="filter">
          <button onClick={() => filterPortfolio('all')}>All</button>
          <button onClick={() => filterPortfolio('ui')}>/ UI</button>
          <button onClick={() => filterPortfolio('code')}>/ Code</button>
          <button onClick={() => filterPortfolio('development')}>/ Development</button>
        </div>
      </div>
      <div className="portfolioList">
        {filteredItems.map((item, index) => (
          <div key={index} className="item">
            <div className="portfolioItem">
              <img src={item.image} alt={item.title} />
              <div className="itemInfo">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export { Portfolio };
