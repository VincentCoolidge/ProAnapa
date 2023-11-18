import "./styles.css";
import logo from "@assets/ceo.webp";

const Team = () => {
  return (
    <section className="container_team">
      <h3 className="heading_3">Команда профессионалов</h3>
      <p className="info_team">
        Мы ориентированы на непрерывный рост бизнеса и развитие сервиса.
        Стремимся оперативно отвечать на запросы, решать проблемы собственников
        и арендаторов жилья. Постоянное развитие компетенций и наличие
        устойчивой обратной связи позволяют нам делать вложения в недвижимость
        прозрачными, надёжными и комфортными.
      </p>
      <div className="container_ceo">
        {[0, 1, 2].map((_, index) => (
          <div key={`team_${index}`} className="box_ceo_team">
            <img className="img_ceo_team" src={logo} alt={`team-${index}`} />
            <span className="img_ceo_title_team">Руководитель проекта</span>
            <span className="img_ceo_sub-title_team">
              Ренат Ирекович Назмеев
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
