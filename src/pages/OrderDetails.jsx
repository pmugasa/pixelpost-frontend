import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faTruckFast,
  faAddressCard,
  faLocationCrosshairs,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
const OrderDetails = ({ order }) => {
  return (
    <>
      <Card>
        <h3 className="font-bold text-primary text-console.log();">
          Order {order.orderNumber}
        </h3>
        <div className="mt-4">
          <p className="font-medium text-gray-400">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            {order.dateCreated}
          </p>
          <p className="font-medium text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            {order.trackingNumber}
          </p>
          <p className="font-medium text-gray-400">
            <FontAwesomeIcon icon={faTruckFast} className="mr-2" />
            {order.courier}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-gray-500">
            <FontAwesomeIcon icon={faReceipt} className="mr-2" />
            Total cost
          </h3>
          <div className="">
            <p>Processing fee{order.processingFee}</p>
            <p>Delivery fee {order.shipmentRate}</p>
            {order.addons.map((i) => (
              <p>
                {i.name} {i.price}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-gray-500">
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
            Delivery Address
          </h3>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.fullName}
          </p>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.street1}
          </p>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.city}
          </p>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.zip}
          </p>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.country}
          </p>
          <p className="font-medium text-gray-400">
            {order.deliveryAddress.phone}
          </p>
        </div>
        <div className="mt-4">
          <button className="btn btn-block btn-primary">
            <FontAwesomeIcon icon={faLocationCrosshairs} />
            Track
          </button>
        </div>
      </Card>
    </>
  );
};

export default OrderDetails;
