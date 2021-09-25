import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="Chart-Bar">
      <div className="Chart-Bar__inner">
        <div
          className="Chart-Bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="Chart-Bar__label" label={props.label}></div>
      </div>
    </div>
  );
};

export default ChartBar;
