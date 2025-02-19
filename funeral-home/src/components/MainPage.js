import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > window.innerHeight) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    const footer = document.querySelector(".footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    navigate("/models");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section className="main-page">
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
      <Carousel
        className="carousel"
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Ustawienie czasu przesuwania obrazka na 5 sekund
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-prev"
            >
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-next"
            >
              &#10095;
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="indicator indicator-selected"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="indicator"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div>
          <img src="/image1.png" alt="Slajd 1" />
          <div className="carousel-caption">
            <p className="opis">Precyzja w każdym detalu</p>
            <h1 className="opisGlowny">
              Każdy z naszych produktów jest wykonany z największą starannością
            </h1>
            <button className="carousel-button" onClick={scrollToBottom}>
              Przejdz dalej
            </button>
          </div>
        </div>
        <div>
          <img src="/image2.png" alt="Slajd 2" />
          <div className="carousel-caption">
            <p className="opis">Trumny z pajęczna</p>
            <h1 className="opisGlowny">
              Produkty wysokiej jakości w bardzo konkurencyjnych cenach
            </h1>
            <button className="carousel-button" onClick={scrollToServices}>
              Katalog trumień
            </button>
          </div>
        </div>
        <div>
          <img src="/image3.png" alt="Slajd 3" />
          <div className="carousel-caption">
            <p className="opis">On coś tam ten</p>
            <h1 className="opisGlowny">
              Trumny firmy Kasprzyk - sztuka w służbie zmarłym
            </h1>
            <button className="carousel-button" onClick={goToContact}>
              Kontakt
            </button>
          </div>
        </div>
      </Carousel>
      <div className="services" id="services">
        <div className="service">
          <div className="service-text">
            <h4>Trumny Wydrzynów</h4>
            <h1>Producent trumien</h1>
            <p>
              W Wasze ręce oddajemy wysokiej jakości produkty – trumny
              pogrzebowe, które charakteryzują się przede wszystkim
              nowoczesnością oraz różnorodnością. W swojej ofercie posiadamy
              bogaty asortyment trumien wykonanych z litego drewna (dębowe,
              sosnowe, topolowe), które swym wzornictwem nawiązują do stylu
              włoskiego, niemieckiego, amerykańskiego czy też hiszpańskiego.
              Firma Kasprzyk Pajęczno to produkcent trumien dębowych i z drewna
              miękkiego, które łączą w sobie elegancję, precyzję i pasję.
            </p>
          </div>
          <div className="service-image">
            <img src="image4.jpg" alt="Trumny" />
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src="image5.webp" alt="Trumny" />
          </div>
          <div className="service-text">
            <h4>Trumny Wydrzynów</h4>
            <h1>Trumny Dębowe</h1>
            <p>
              Szczególne miejsce wśród produktów firmy Kasprzyk zajmują trumny
              dębowe. Odznaczają się one nie tylko niezwykłą elegancją, ale
              przede wszystkim są bardzo trwałe, a także odporne na działanie
              wilgoci. Trumny wykonane z drewna dębowego poddają się również w
              łatwy sposób obróbce mechanicznej, co pozwala nadać im
              niepowtarzalne kształty oraz wzbogacić o ciekawe zdobienia. Gama
              kolorystyczna w przypadku trumien dębowych rozpięta jest od
              odcieni szarej żółci po ciemny brąz. Deski z drewna dębowego
              podatne są również na polerowanie, dzięki czemu trumny dębowe mogą
              nabrać dodatkowego blasku. Trumny dębowe zwykło uważać się za
              szczególnie szlachetne, dlatego wiele rodzin decyduje się na wybór
              właśnie tego typu trumny dla bliskiej osoby. Jej nieco wyższa, w
              stosunku do innych rodzajów drewna, cena rekompensowana jest
              wysokimi walorami estetycznymi oraz funkcjonalnymi.
            </p>
            <button
              className="carousel-button"
              onClick={() => navigate("/about")}
            >
              O Nas
            </button>
          </div>
        </div>

        <div className="service">
          <div className="service-text">
            <h4>Trumny Wydrzynów</h4>
            <h1>Producent trumien</h1>
            <p>
              W Wasze ręce oddajemy wysokiej jakości produkty – trumny
              pogrzebowe, które charakteryzują się przede wszystkim
              nowoczesnością oraz różnorodnością. W swojej ofercie posiadamy
              bogaty asortyment trumien wykonanych z litego drewna (dębowe,
              sosnowe, topolowe), które swym wzornictwem nawiązują do stylu
              włoskiego, niemieckiego, amerykańskiego czy też hiszpańskiego.
              Firma Kasprzyk Pajęczno to produkcent trumien dębowych i z drewna
              miękkiego, które łączą w sobie elegancję, precyzję i pasję.
            </p>
            <button
              className="carousel-button"
              onClick={() => navigate("/models")}
            >
              Modele Trumien
            </button>
          </div>
          <div className="service-image">
            <img src="image5.webp" alt="Trumny" />
          </div>
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

export default MainPage;
