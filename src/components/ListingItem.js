import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import baththub from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id }) {
  const priceFormat = (price) => {
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ",");
  };

  const bedIcons = (number) => {
    let iconCounter = [];

    for (let i = 1; i <= number; i++) {
      iconCounter.push(i);
    }

    return iconCounter;
  };
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            €
            {listing.offer
              ? priceFormat(listing.discountedPrice)
              : priceFormat(listing.regularPrice)}
            {listing.type === "rent" && " per month"}
          </p>
          <div className="categoryListingInfoDiv">
            <div>
              {bedIcons(listing.bedrooms).map((number, i) => (
                <img src={bedIcon} alt="bed" key={i} />
              ))}
            </div>
            {/* <img src={bedIcon} alt="bed" /> */}
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ListingItem;
