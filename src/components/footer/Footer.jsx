import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Travel communities </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Restaurant reservations </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
