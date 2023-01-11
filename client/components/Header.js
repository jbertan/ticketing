import Link from "next/link";
import BuildClient from "../api/build-client";
import useSWR from "swr";
import { useEffect, useState, useReducer } from "react";
const Header = (props) => {
  const [setValue, forceUpdate] = useReducer((x) => x + 1, 1);
  const [currentUser, setCurrentUser] = useState(null);
  const fetchUser = () => {
    fetch("http://www.barbeque.com/api/users/currentUser")
      .then((response) => response.json())
      .then((data) => setCurrentUser({ ...data.currentUser }));
  };

  const submitHandler = () => {
    console.log("pressed mey");
    forceUpdate();
  };
  useEffect(() => {
    fetchUser();
  }, [setValue]);
  return (
    <div>
      {currentUser?.email ? (
        <div>
          <div flex justify-end space-x-2 pr-2>
            Name:{currentUser.email}
          </div>
          <div className="flex justify-end space-x-6 mr-8">
            <Link onClick={() => submitHandler()} href="/tickets/new">
              Sell Tickets
            </Link>
            <Link onClick={() => submitHandler()} href="/orders">
              My Orders
            </Link>
            <Link onClick={() => submitHandler()} href="/auth/signout">
              Sign Out
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-end space-x-2 pr-2">
          <Link onClick={() => submitHandler()} href="/auth/signin">
            Sign In
          </Link>
          <Link onClick={() => submitHandler()} href="/auth/signup">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
