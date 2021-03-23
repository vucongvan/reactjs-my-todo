import React from "react";
import TabButton from "../extends/tabButton";

// const ALL = 1;
// const COMPLETED = 2;
// const ACTIVE = 3;

class Tabs extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // displayTab(tab, index) {
  //   if (this.props.tabSelected === index) {
  //     return (
  //       <TabButton
  //         key={index.toString()}
  //         className="nav-link text-white active"
  //         tabName={tab}
  //       />
  //     );
  //   }

  //   return (
  //     <TabButton
  //       key={index.toString()}
  //       className="nav-link text-white"
  //       tabName={tab}
  //     />
  //   );
  // }

  render() {
    const tabNames = ["ALL", "COMPLETED", "ACTIVE"];

    return (
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabNames.map((tab, index) => (
            <TabButton
              key={index.toString()}
              className={'nav-link text-white ' + (this.props.tabSelected === tab ? 'text-dark active' : '')  }
              tabName={tab}
            />
          ))}
        </div>
      </nav>
    );
  }
}

export default Tabs;
