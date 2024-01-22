import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function RootLayout() {
  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}
