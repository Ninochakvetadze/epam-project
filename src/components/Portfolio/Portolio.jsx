import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all',
    };
  }

  handleClick = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <div className="portfolio-tabs">
          <button onClick={() => this.handleClick('all')} className={activeTab === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => this.handleClick('code')} className={activeTab === 'code' ? 'active' : ''}>Code</button>
          <button onClick={() => this.handleClick('ui')} className={activeTab === 'ui' ? 'active' : ''}>UI</button>
        </div>

        <div className="portfolio-content">
          <div className={activeTab === 'all' || activeTab === 'code' ? '' : 'hidden'}>
            <h2>All Portfolio Item</h2>
            <p>Description of the all portfolio item.</p>
          </div>
          <div className={activeTab === 'all' || activeTab === 'ui' ? '' : 'hidden'}>
            <h2>Code Portfolio Item</h2>
            <p>Description of the code portfolio item.</p>
          </div>
          <div className={activeTab === 'all' || activeTab === 'ui' ? '' : 'hidden'}>
            <h2>UI Portfolio Item</h2>
            <p>Description of the UI portfolio item.</p>
          </div>
        </div>
      </div>
    );
  }
}

export {Portfolio};
