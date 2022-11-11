import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const SharedLayout = () => {
  return (
    <PageContainer>
      <Header />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};
export default SharedLayout;