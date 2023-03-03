import OrderCard from "../components/OrderCard";

const Orders = ({ orders }) => {
  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.orderNumber} order={order} />
      ))}
    </>
  );
};
export default Orders;
