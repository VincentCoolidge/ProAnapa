import Header from "@components/Header";
import Team from "@components/Team";
import YouTubeInfo from "@components/YouTubeInfo";
import Footer from "@components/Footer";
import Furnishing from "@components/Furnishing";
import OurServices from "@components/OurServices";
import AnimationInfo from "@components/AnimationInfo";
import Reviews from "@components/Reviews";
import Margin from "@components/Margin";
import Layout from "@components/Layout";

const App = () => (
  <div className="app">
    <Header />
    <Layout>
      <AnimationInfo />
      <Margin />
      <OurServices />
      <Margin />
      <Furnishing />
      <Margin />
      <Team />
      <Margin />
      <Reviews />
      <Margin />
      <YouTubeInfo />
      <Margin />
    </Layout>
    <Footer />
  </div>
);

export default App;
