import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BarIcon() {
  return (
    <section>
      <div className="fa-2x">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </section>
  );
}

export default BarIcon;
