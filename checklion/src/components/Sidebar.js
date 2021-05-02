import './Sidebar.css';
import React from "react";
import BarIcon from './BarIcon'

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);


  return (
    <React.Fragment>
        <div className="toggle-menu"
        onClick={() => toggleMenu()}>
        <BarIcon  />
        </div>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <div className="content">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;