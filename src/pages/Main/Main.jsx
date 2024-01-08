import Team from "@components/Team";
import YouTubeInfo from "@components/YouTubeInfo";
import Furnishing from "@components/Furnishing";
import OurServices from "@components/OurServices";
import AnimationInfo from "@components/AnimationInfo";
import Margin from "@components/Margin";

const Main = () => {
  return (
    <>
      <AnimationInfo />
      <Margin />
      <OurServices />
      <Margin />
      <Furnishing />
      <Margin />
      <Team />
      <Margin />
      <YouTubeInfo />
      <Margin />
    </>
  );
};

export default Main;
