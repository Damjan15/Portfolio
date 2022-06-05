import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <div className="w-full h-screen flex flex-col ">
      <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
