import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="contact">
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
          <h1>Kontakt</h1>
        </div>
      </div>
      <div className="contact-content">
        <p>Szukasz dostawcy trumien?</p>
        <h1>Skontaktuj się z nami</h1>
        <p>
          Wypełnij poniższy formularz, aby skontaktować się z nami w sprawie
          dostawy trumien.
        </p>
        <p>ul. Janki 60,</p>
        <p>98-330 Pajęczno</p>
        <p>kasprzykjanki@gmail.com</p>
        <p>kasprzyktrumny@gmail.com</p>
        <form>
          <input type="text" id="name" placeholder="Imie/Nazwisko" />

          <input type="email" id="email" placeholder="Email" />

          <textarea id="message" placeholder="Wiadomość..."></textarea>

          <button type="submit">Wyślij</button>
        </form>
      </div>
      <div className="location">
        <h2>Nasza Lokalizacja</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43247.27361388589!2d18.91863318954664!3d51.12136499011555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710a02f80d4f96d%3A0x69442b8052c7eb70!2sWydrzyn%C3%B3w%2014%2C%2098-300%20Wydrzyn%C3%B3w!5e0!3m2!1spl!2spl!4v1739987086430!5m2!1spl!2spl"
          width="1200"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa lokalizacji"
        ></iframe>
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

export default Contact;
