import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppItem = (props) => {
  const { href = "app/android", icon, title = "پلی استور" } = props;
  return (
    <a href={href} rel="noreferrer" target="_blank" className="download__item HighlightBackground">
      <FontAwesomeIcon className="download__icon SecondDayNight" icon={icon} />
      <h5 className="SecondDayNight">{title}</h5>
      {props.children}
    </a>
  );
};

export default AppItem; 