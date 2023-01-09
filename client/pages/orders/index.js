const OrderIndex = (props) => {
  const { orders } = props;
  console.log(orders);
  return (
    <div className="flex w-full h-screen flex-col">
      {orders ? (
        orders
          .filter((item) => item.status === "complete")
          .map((order) => (
            <div className="flex flex-col font-bold text-black text-lg">
              {order.ticket.title} and {order.status} price is ={" "}
              {order.ticket.price}
            </div>
          ))
      ) : (
        <div>No Orderr Found</div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const response = await fetch(
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/orders",
    {
      headers: context.req.headers,
    }
  );
  const orders = await response.json();

  return { props: { orders } };
};
export default OrderIndex;
