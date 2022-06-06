import Head from "next/head";
import { Footer, Navbar } from "../components";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A front-end developer from Macedonia"
        />
      </Head>

        <Navbar />
        <main className="px-6 lg:max-w-7xl lg:mx-auto">{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
