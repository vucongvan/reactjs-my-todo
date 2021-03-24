import React from "react";

class Tabs extends React.Component {
  render() {
    const tabNames = ["ALL", "COMPLETED", "ACTIVE"];

    return (
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabNames.map((tab, index) => (
            <a href="#!" 
              key={index.toString()} 
              className={'nav-link text-white ' + (this.props.tabSelected === index ? 'text-dark active' : '')  } 
              onClick = {() => this.props.changeTab(index)}>{tab}
            </a>
          ))}
        </div>
      </nav>
    );
  }
}

export default Tabs;
