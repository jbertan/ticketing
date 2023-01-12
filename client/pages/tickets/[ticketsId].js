import { useRouter } from "next/router";
import useRequest from "../../hooks/use-request";
{
  useRouter;
}
const TicketShow = ({ ticket }) => {
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => router.push(`/orders/${order.id}`),
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`order time for ticker ${ticket.title}`);
    doRequest();
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col mx-16 mt-8 space-x-6">
        <label className="ml-6 text-lg text-zinc-800" id="title">
          {ticket.title}
        </label>
        <label className="text-lg text-zinc-800" id="price">
          price : {ticket.price}
        </label>
        {errors}
        <button
          onClick={submitHandler}
          className="w-24 h-10 rounded-lg bg-teal-500 text-lg font-semibold text-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const response = await fetch("http://www.slowcookbarbeque.com/api/tickets");

  const tickets = await response.json();
  const paths = tickets.map((ticket) => ({
    params: { ticketsId: ticket.id },
  }));

  return { paths, fallback: "blocking" };
};
/* export const getServerSideProps = async (context) => {
  const { ticketsId } = context.query;
  const res = await fetch(
    `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/tickets/${ticketsId}`,
    {
      headers: context.req.headers,
    }
  );
  const ticket = await res.json();

  return { props: { ticket } };
}; */
export const getStaticProps = async (context, req) => {
  //const { ticketsId } = context.query;
  console.log(context);
  const res = await fetch(
    `http://www.slowcookbarbeque.com/api/tickets/${context.params.ticketsId}`
  );
  const ticket = await res.json();

  return { props: { ticket }, revalidate: 30 };
};

export default TicketShow;
