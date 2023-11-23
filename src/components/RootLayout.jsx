import Footer from "./Footer/Footer";
import BottomHeader from "./Headers/BottomHeader";
import Header from "./Headers/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
}
