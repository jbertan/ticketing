import BuildClient from "../../api/build-client";
import { useRef, useState } from "react";
import useRequest from "../../hooks/use-request";
import { useRouter } from "next/router";
const NewTicket = (props) => {
  const router = useRouter();
  const inputTitle = useRef("");
  const inputPrice = useRef("");
  const [bvalue, setBvalue] = useState();
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title: inputTitle.current.value,
      price: inputPrice.current.value,
    },
    onSuccess: () => router.push("/"),
  });
  const onBlur = () => {
    const value = parseFloat(bvalue);
    if (isNaN(value)) {
      return;
    }
    setBvalue(value.toFixed(2));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    doRequest();
    /* const data = {
      title: inputTitle.current.value.toString(),
      price: inputPrice.current.value.toString(),
    };
    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result); */
  };
  return (
    <div className="flex flex-col w-full h-screen mt-32">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-zinc-700s">Create Tickets</h1>
      </div>
      <div className="flex mx-16 space-x-4 mt-8">
        <label id="title" className="text-lg">
          Title
        </label>
        <input
          id="title"
          className="h-8 w-36 rounded-lg border-2 border-sky-500"
          ref={inputTitle}
        />
      </div>
      <div className="flex mx-16 space-x-4 mt-8">
        <label id="price" className="text-lg">
          Price
        </label>
        <input
          id="price"
          className="h-8 w-36 rounded-lg border-2 border-sky-500"
          ref={inputPrice}
          onBlur={onBlur}
          onChange={(e) => setBvalue(e.target.value)}
          value={bvalue}
        />
      </div>
      <div className="flex-col mx-16 space-x-4 mt-8">
        {errors}
        <button
          className="h-8 w-36 rounded-lg bg-sky-500 text-black text-lg hover:shadow-lg"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  //BuildClient on ly gives instance we need to supply .get api properties
  if (
    context.req.headers.cookie &&
    context.req.headers.host === "www.slowcookbarbeque.com"
  ) {
    const { data } = await BuildClient(context).get("/api/users/currentuser");
    console.log(data);
    return { props: { data } };
  } else {
    return { props: { data: "Need to sign in" } };
  }
};
export default NewTicket;
