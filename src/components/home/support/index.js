const SupportItem = (props) => {
    const {href = "#", src = "./img/support/24hour.svg", title = "پشتیبانی 24/7", desc = "در صورت بروز هرگونه مشکل بدون درنگ با پشتیبانی تماس بگیرید"} = props;
  return (
    <a href={href} className="item__box HighlightBackgroundHover">
      <div className="item__img">
        <img src={src} alt={title} />
      </div>
      <h5 className="item__title">{title}</h5>
      <div className="item__desc">{desc}</div>
    </a>
  );
};

export default SupportItem;