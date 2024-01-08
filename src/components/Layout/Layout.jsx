import { Outlet } from "react-router-dom";

import { Main } from "./styled";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default Layout;
