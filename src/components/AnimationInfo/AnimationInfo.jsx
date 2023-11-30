import "./styled.css";
import SocialLinks from "@components/SocialLinks";

const AnimationInfo = () => {
  return (
    <div className="animationInfo_container">
      <div className="animationInfo_box">
        <div className="animationInfo_box_heading_1">
          <h1 className="heading_1">
            ProAnapa<span className="heading_1_circle">&bull;</span>
          </h1>
        </div>
        <h3 className="heading_3">
          Ваш надежный эксперт и партнер на рынке недвижимости
        </h3>
        <span className="animationInfo_desc">
          Помогаем инвестировать, продать, обеспечиваем комплексную подготовку и
          управление арендными объектами
        </span>
      </div>
      <div className="animationInfo_socialLinks">
        <SocialLinks color={"black"} />
      </div>
    </div>
  );
};

export default AnimationInfo;
