import "./styles.css";

const Header = () => {
  return (
    <header className="header_container">
      <nav className="header_nav">
        <div className="header_logo">
          <a className="header_logo_link" href="/#">
            ProAnapa
            <div className="header_logo_link_circle" />
          </a>
        </div>
        <ul className="header_list">
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Управление недвижимостью
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Подбор недвижимости
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Продажа
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Реинвестиция
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Арендаторам
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Ремонт
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Меблировка
            </a>
          </li>
          <li className="header_list_element">
            <a className="header_list_element_link" href="/#">
              Консультации
            </a>
          </li>
        </ul>
        <div className="header_list_element_phone">
          <a className="header_list_element_phone_link" href="tel:+79189333163">
            +7 918 933 31 63
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
