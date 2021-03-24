import React from "react";
import PropTypes from "prop-types";

function Tabs(props) {
  const tabNames = ["ALL", "COMPLETED", "ACTIVE"];

  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        {tabNames.map((tab, index) => (
          <a
            href="#!"
            key={index.toString()}
            className={
              "nav-link text-white " +
              (props.tabSelected === index ? "text-dark active" : "")
            }
            onClick={() => props.changeTab(index)}
          >
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
}

Tabs.propTypes = {
  tabSelected: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tabs;
