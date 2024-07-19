import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function AnotherBrands({
  anotherBrands = [],
  newUrl,
  ipDataCode,
  currentLanguage,
  source,
  selectedCountry,
}) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [otherData, setOtherData] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState(8);

  const handleShowMore = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
  };

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const geo = selectedCountry.toUpperCase();

    let filteredDataOther = [];

    if (geo) {
      filteredDataOther = anotherBrands.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData["CurrentStatus"] === "Ongoing" &&
          rowData["CasinoBrand"] !== "Mirax (FS)" &&
          rowData["CasinoBrand"] !== "Katsubet (FS)" &&
          rowData["CasinoBrand"] !== "7Bit (FS)" &&
          rowData["High_hybrid"] === "1"
      );
    } else {
      filteredDataOther = anotherBrands.filter(
        (rowData) =>
          rowData.GEO === ipDataCode &&
          rowData["CurrentStatus"] === "Ongoing" &&
          rowData["CasinoBrand"] !== "Mirax (FS)" &&
          rowData["CasinoBrand"] !== "Katsubet (FS)" &&
          rowData["CasinoBrand"] !== "7Bit (FS)" &&
          rowData["High_hybrid"] === "1"
      );
    }
    if (geo === "ALL") {
      filteredDataOther = anotherBrands.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData["CurrentStatus"] === "Ongoing" &&
          rowData["CasinoBrand"] !== "Mirax (FS)" &&
          rowData["CasinoBrand"] !== "Katsubet (FS)" &&
          rowData["CasinoBrand"] !== "7Bit (FS)" &&
          rowData["FirstPriority"] === "1"
      );
    }


    // Перемешиваем данные перед отображением
    setOtherData(shuffleArray(filteredDataOther));
    setLoading(false);

  }, [ipDataCode, currentLanguage, selectedCountry, source]);

  const options = {
    loop: true,
    margin: 40,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1100: {
        items: 5
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="bground">
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 position-relative align-self-center" data-aos="fade-up">
              {/* <p className="sub-heading mt-5 mb-3 fs-4 fw-bold theme-text-primary">{t("Discover the Best Online Casino Offers")}</p> */}
              <h1 className="display-1 text-uppercase font-black max theme-text-white text-align-center">{t("Las Vegas Adventure Starts Here")}</h1>

              <p className="fs-5 mb-0 theme-text-white text-align-center">{t("Exclusive deals, big wins await!")}</p>
              <div className="group mt-5 btn-wrap">
                {otherData.length > 0 ? (
                  otherData.slice(0, 1).map((rowData, index) => (
                    <a key={index} target="_blank" href={rowData["GoBig"] + newUrl + "L_vegas_random"}>
                      <button className="cybr-btn"> {t("Try Your Luck!")}<span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">{t("Lets see!")}</span>
                        <span aria-hidden className="cybr-btn__tag">R25</span>
                      </button>
                    </a>
                  ))
                ) : (
                  <p className="no-available-brands">{t("No brands available for your country")}</p>
                )}
              </div>
            </div>
            {/* <div className="col-12 col-lg-6 position-relative" data-aos="fade-down">
              <figure className="mb-0 shape-wrap">
                <img src={heroPic} alt={heroPic} className="img-fluid obj-1" />
              </figure>
            </div> */}
          </div>
        </div>
        <div className="container my-5">
        </div>
      </div>
    </section>

  );
}

export default AnotherBrands;
