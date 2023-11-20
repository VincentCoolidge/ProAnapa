import Header from "@components/Header";
import Team from "@components/Team";
import YouTubeInfo from "@components/YouTubeInfo";
import Footer from "@components/Footer";
import Furnishing from "@components/Furnishing";
import OurServices from "@components/OurServices";

const App = () => (
  <div className="app">
    <Header />
    <main className="layout">
      <div className="margin" />
      <OurServices />
      <div className="margin" />
      <Furnishing />
      <div className="margin" />
      <Team />
      <div className="margin" />
      <YouTubeInfo />
      <div className="margin" />
    </main>
    <Footer />
  </div>
);

export default App;
