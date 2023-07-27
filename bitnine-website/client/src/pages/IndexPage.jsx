import Header from "../container/Header";
import About from "../container/About";
import Features from "../container/Features";
import DbEngine from "../container/DbEngine";
import Footer from "../container/Footer";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Features />
      <DbEngine />
      <Footer />
    </div>
  );
};

export default IndexPage;
