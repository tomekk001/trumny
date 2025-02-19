import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const Models = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

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
              <li
                className="dropdown"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button
                  className="dropdown-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Zapobiega zamykaniu dropdownu
                    navigate("/models");
                    setIsHovered(false); // Ukryj menu po kliknięciu
                  }}
                >
                  Usługi
                </button>
                {isHovered && (
                  <ul
                    className="dropdown-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li>
                      <button onClick={() => navigate("/trumny-proste")}>
                        Trumny Proste
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/trumny-francuskie")}>
                        Trumny Francuskie
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/trumny-nakladane")}>
                        Trumny Nakładane
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/trumny-samolot")}>
                        Trumny Samolot
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/trumny-Szóstka")}>
                        Trumny Amerykańskie
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate("/trumny-Iglo")}>
                        Trumny Łamane NEW
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button onClick={() => navigate("/contact")}>Kontakt</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="about-text">
          <h1>Modele trumien</h1>
        </div>
      </div>
      <footer className="footer" id="contact">
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
