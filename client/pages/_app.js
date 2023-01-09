import "bootstrap/dist/css/bootstrap.css";
import HeaderWrapper from "../components/HeaderWrapper";
import "/src/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <HeaderWrapper>
      <Component {...pageProps} />
    </HeaderWrapper>
  );
};

/* export const getServerSideProps = async ({ appContext, req }) => {
  const client = BuildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }
}; */
/*
  const response = await fetch(
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
    {
      headers: req.headers,
    }
  );
  const data = await response.json();
  let pageProps={}
  if(data){
    pageProps
  }
  console.log(data);

  return {
    pageProps,
    ...data,
  };
};*/
export default App;
