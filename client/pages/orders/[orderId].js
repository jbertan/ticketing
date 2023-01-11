import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";
const orderShow = (props) => {
  const { order, currentUser } = props;
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => console.log(payment),
  });
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [order]);
  if (timeLeft < 0) {
    return <div>Order Expired Darling</div>;
  }
  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="flex justify-center">{order.ticket.title}</h1>
      <div className="text-lg text-zinc-500">
        Expiration in {timeLeft} seconds
        <StripeCheckout
          token={({ id }) => doRequest({ token: id })}
          stripeKey="pk_test_51MLpVMJvnMPlXhjQSXNO2RRHzzUEcRik6ZhLnIHdtA73vL4iV53KXe4brMb2wTZp7vo65qN4BgvTLKQLacsqeRm500e7duJCvo"
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
      </div>
      {errors}
      <button className="w-16 h-10 border-2 border-teal-500 rounded-lg">
        Pay
      </button>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://www.slowcookbarbeque.com/api/orders/${context.params.orderId}`,
    {
      headers: context.req.headers,
    }
  );
  const responseUser = await fetch(
    `http://www.slowcookbarbeque.com/api/users/currentUser/`,
    {
      headers: context.req.headers,
    }
  );
  const currentUser = await responseUser.json();
  const order = await response.json();

  return { props: { order, currentUser } };
};
export default orderShow;
