import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faWeight, faBox } from "@fortawesome/free-solid-svg-icons";

const PackingRequestDetails = ({ packingRequest }) => {
  return (
    <>
      <Card>
        <h3 className="font-bold text-lg text-primary">
          {packingRequest.requestNumber}
        </h3>
        <p className="font-medium text-gray-400">
          <span className="mr-1">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          Requested on {packingRequest.dateCreated}
        </p>
        {packingRequest.weight ? (
          <div>
            <p className="font-medium text-gray-400">
              <span className="mr-1">
                <FontAwesomeIcon icon={faWeight} />
              </span>
              Parcel weight {packingRequest.weight}kg
            </p>
            <p className="font-medium text-gray-400">
              <span className="mr-1 ">
                <FontAwesomeIcon icon={faBox} />
              </span>
              Parcel dimensions {packingRequest.dimensions}cm
            </p>
          </div>
        ) : null}
        <div className="divider"></div>
        <p className="font-bold text-lg text-gray-500">Items to pack</p>
        <ul>
          {packingRequest.items.map((item, index) => (
            <li key={index} className="font-medium text-gray-400">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};
export default PackingRequestDetails;
