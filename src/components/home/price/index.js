import React from "react";

const price = (props) => {
  const {name, tag, price, percent} = props;
  return (
    <div className="coin__item">
      <div className="coin__title FirstDayNight">{name} - {tag}</div>
      <div className="coin__price SecondDayNight">
        $<span>{price}</span>
      </div>
      <div className={`coin__percent ${percent < 0 ? 'red' : 'green'}`}>{percent}%</div>
    </div>
  );
};

export default price;
