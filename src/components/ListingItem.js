import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import baththubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id }) {
  const priceFormat = (price) => {
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return price.toString().replace(regex, ",");
  };

  const displayIcons = (number) => {
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
              {displayIcons(listing.bedrooms).map((number, i) => (
                <img src={bedIcon} alt="bed" key={i} />
              ))}
            </div>
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
          </div>
          <div className="categoryListingInfoDiv">
            <div>
              {displayIcons(listing.bathrooms).map((number, i) => (
                <img src={baththubIcon} alt="bed" key={i} />
              ))}
            </div>
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bedrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ListingItem;
