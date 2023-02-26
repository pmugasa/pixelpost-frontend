import PackingRequestCard from "../components/PackingRequestCard";

const PackingRequest = ({ packingRequests }) => {
  return (
    <>
      {packingRequests.map((packingRequest) => (
        <PackingRequestCard
          key={packingRequest.requestNumber}
          packingRequest={packingRequest}
        />
      ))}
    </>
  );
};

export default PackingRequest;
