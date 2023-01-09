import { useEffect, useState } from "react";
import Header from "./Header";

const HeaderWrapper = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default HeaderWrapper;
