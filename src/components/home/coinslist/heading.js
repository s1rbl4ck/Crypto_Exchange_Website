const CoinHeading = (props) => {
  return (
    <div className="heading">
      <div className="head__title SecondDayNight">{props.titleName}</div>
      <div className="head__title SecondDayNight">{props.titlePrice}</div>
      <div className="head__title SecondDayNight">{props.titleChanges}</div>
      <div className="head__title SecondDayNight">{props.titleValue}</div>
    </div>
  );
};

export default CoinHeading;
