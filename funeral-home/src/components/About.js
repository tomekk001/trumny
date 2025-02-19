import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about">
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
          <h1>O Nas</h1>
        </div>
      </div>
      <div className="about-content">
        <p>
          Cechy, które zdecydowanie wyróżniają firmę Kasprzyk na tle innych
          producentów trumien to nowoczesność oraz elastyczność w kontaktach z
          klientami. Wychodząc naprzeciw oczekiwaniom naszych kontrahentów – w
          krótkim czasie realizujemy nie tylko zamówienia na produkty
          standardowe, ale przede wszystkim tak zwane zamówienia nietypowe. Są
          to trumny realizowane na specjalne zamówienie klienta, ze względu ich
          parametry i przeznaczenie: uwzględniające wiek, wzrost czy wagę
          zmarłego. Podejmujemy się także przygotować trumny kremacyjne.
        </p>
        <p>
          Dzięki różnorodności wytwarzanych trumien jesteśmy w stanie sprostać
          oczekiwaniom każdego zleceniodawcy, zarówno pod względem wzornictwa,
          jak, ceny oraz wysoko gatunkowych materiałów jak nasze trumny dębowe.
          Jesteśmy firmą, która swoje produkty tworzy od samego początku do
          samego końca, biorąc odpowiedzialność za powstały asortyment.
        </p>
        <img src="/image9.jpg" alt="Trumna" />
        <p>
          Posiadamy bogaty park maszynowy, w skład którego wchodzą urządzenia
          tworzące modele, których jesteśmy jedynym producentem w Polsce, a
          specjalistyczna lakiernia zapewnia wysoką jakość oferowanych
          produktów.
        </p>
        <p>
          Uważamy, że każda branża – w tym również branża funeralna – musi
          podlegać ciągłemu rozwojowi i podążać za nowościami. Dlatego właśnie
          asortyment, który chcemy Państwu zaproponować, pozwoli Wam zbudować
          przewagę nad konkurencją – przede wszystkim poprzez posiadanie w
          swojej ofercie różnorodnych i nowoczesnych modeli.
        </p>
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

export default About;
