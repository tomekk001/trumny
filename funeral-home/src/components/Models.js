import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Models.css";

const Models = () => {
  const navigate = useNavigate();

  // Lista modeli trumien
  const models = [
    {
      img: "/trumnaamerykanska.webp",
      title: "Trumna Amerykańska",
      link: "/trumna-amerykanska",
    },
    {
      img: "/trumnafrancuska.webp",
      title: "Trumna Francuska",
      link: "/trumna-francuska",
    },
    { img: "/trumnaiglo.webp", title: "Trumna Iglo", link: "/trumna-iglo" },
    {
      img: "/trumnalamana.webp",
      title: "Trumna Łamana",
      link: "/trumna-lamana",
    },
    {
      img: "/trumnanakladana.webp",
      title: "Trumna Nakładana",
      link: "/trumna-nakladana",
    },
    {
      img: "/trumnaprosta1.webp",
      title: "Trumna Prosta",
      link: "/trumna-prosta",
    },
    {
      img: "/trumnasamolot.webp",
      title: "Trumna Samolot",
      link: "/trumna-samolot",
    },
    {
      img: "/trumnaszostka.webp",
      title: "Trumna Szóstka",
      link: "/trumna-szostka",
    },
  ];

  return (
    <section className="models">
      <div className="navbar-background">
        <nav className="navbar">
          <div className="navbar-content">
            <img src="/logo.webp" alt="Logo" className="logo" />
            <ul>
              <li>
                <button onClick={() => navigate("/")}>Strona Główna</button>
              </li>
              <li>
                <button onClick={() => navigate("/about")}>O Nas</button>
              </li>
              <li>
                <button onClick={() => navigate("/models")}>Usługi</button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")}>Kontakt</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-text">
          <h1>Modele trumien</h1>
        </div>
      </div>

      {/* Galeria modeli w dwóch rzędach po cztery */}
      <div className="models-container">
        {models.map((model, index) => (
          <div
            key={index}
            className="model"
            onClick={() => navigate(model.link)}
          >
            <img src={model.img} alt={model.title} />
            <h2>{model.title}</h2>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>
          &copy; 2025 Zakład Pogrzebowy Kasprzyk. Wszelkie prawa zastrzeżone.
        </p>
        <p>Adres: ul. Przykładowa 1, 00-000 Miasto</p>
        <p>Telefon: +48 123 456 789</p>
        <p>Email: kontakt@kasprzyktrumny.pl</p>
      </footer>
    </section>
  );
};

export default Models;
