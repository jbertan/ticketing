import axios from "axios";
import { useRouter } from "next/router";
const LandingPage = ({ currentUser, tickets }) => {
  const router = useRouter();
  console.log(tickets);
  const nextPageBossMan = (id) => {
    router.push(`/tickets/${id}`);
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex justify-center items-center text-4xl">
        Wilkommen to the Ticket Shop
      </div>

      {tickets &&
        tickets.map((ticket, id) => (
          <div
            onClick={() => nextPageBossMan(ticket.id)}
            key={id}
            className="flex flex-col mx-4 my-4 w-96 h-32 border-2 border-gray-300 rounded-xl shadow-xl"
          >
            {ticket.title} <br /> {ticket.price}
          </div>
        ))}
    </div>
  );
};

/* LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");
  const mata = await client.get("/api/tickets");
  const response = await fetch(
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/tickets"
  );
  axios
    .get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/tickets"
    )
    .then((response) => console.log(response.data));


  console.log(mata);
  /* const datas = response.json();
  console.log(datas); 

  return { tickets: data };
}; */
export const getServerSideProps = async (context) => {
  const response = await fetch("http://www.slowcookbarbeque.com/api/tickets", {
    headers: context.req.headers,
  });

  const data = await response.json();

  return { props: { tickets: data } };
};

export default LandingPage;
