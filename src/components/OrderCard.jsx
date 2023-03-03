import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  return (
    <>
      <Card>
        <Link to={`/order/${order.orderNumber}`}>
          <h3 className="font-semibold text-primary text-console.log();">
            Order {order.orderNumber}
          </h3>
        </Link>
        <div>
          <p className="font-medium text-gray-400">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            {order.dateCreated}
          </p>
          <p className="font-medium text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            {order.trackingNumber}
          </p>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary btn-block">Track</button>
        </div>
      </Card>
    </>
  );
};
export default OrderCard;
