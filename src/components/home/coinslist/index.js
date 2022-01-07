const CoinItem = (props) => {
    const {href = "#", src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg", name = "BTC", tag = "Bitcoin", price = "61,017.91 $", percent = "10.27", value = "19.16M"} = props;
  return (
    <a href={href}>
      <div className="coin__item HighlightBackgroundHover">
        <div className="coin__profile">
          <div className="coin__logo">
            <img src={src} alt="name" />
          </div>

          <div className="coin__name">{name}</div>

          <div className="coin__tag SecondDayNight">{tag}</div>
        </div>

        <div className="coin__price">{price}</div>

        <div className={`coin__percent ${percent < 0 ? "red" : "green"}`}>{percent} %</div>

        <div className="coin__value">{value}</div>
      </div>
    </a>
  );
};

export default CoinItem;