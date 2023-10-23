import React, { useState } from 'react';
import portfolioData from './PortfolioData';

const Portfolio = () => {
  const [category, setCategory] = useState('all');

  const portfolioItems = portfolioData;

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
