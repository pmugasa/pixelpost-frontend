import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";

const PackingRequestCard = ({ packingRequest }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/additional-services");
  };
  return (
    <>
      <Card>
        <div className="textContainer">
          <h3 className="font-bold text-lg text-primary  link link-hover">
            <Link to={`/packing-requests/${packingRequest.requestNumber}`}>
              Packing Request: {packingRequest.requestNumber}
            </Link>
          </h3>
          <div className="flex space-x-4 mt-1">
            <p className="font-medium text-gray-400">
              <FontAwesomeIcon icon={faWeight} /> {packingRequest.weight}
            </p>
            <p className="font-medium text-gray-400">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              {packingRequest.dateCreated}
            </p>
          </div>

          {packingRequest.dimensions != null ? (
            <p className="font-medium text-gray-400 mt-1">
              Dimensions: L 20 x W 20 x H 10 cm
            </p>
          ) : null}
        </div>
        <div className="btnContainer mt-4">
          {packingRequest.dimensions !== null ? (
            <button
              className="btn btn-success btn-outline btn-block"
              onClick={handleClick}
            >
              ship
            </button>
          ) : (
            <button className="btn loading btn-primary btn-ghost btn-block">
              packing in progress
            </button>
          )}
        </div>
      </Card>
    </>
  );
};
export default PackingRequestCard;
