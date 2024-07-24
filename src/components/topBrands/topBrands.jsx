import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import Banner from "../banner";
import "bootstrap/dist/css/bootstrap.min.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    }
  },
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true
};

function TopBrands({
  topComponentData = [],
  newUrl,
  ipDataCode,
  currentLanguage,
  source,
  selectedCountry,
  setSelectedCountry,
}) {
  const { t } = useTranslation();

  const urlParams = new URLSearchParams(window.location.search);
  const brandValue = urlParams.get("brand");

  const [carouselKey, setCarouselKey] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const geo = selectedCountry.toUpperCase();

  useEffect(() => {
    let newFilteredData = [];
    if (geo) {
      newFilteredData = topComponentData.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData["CurrentStatus"] === "Ongoing" &&
          rowData["CasinoBrand"] !== "Mirax (FS)" &&
          rowData["CasinoBrand"] !== "Katsubet (FS)" &&
          rowData["CasinoBrand"] !== "7Bit (FS)" &&
          rowData["High_hybrid"] === "1"
      );
    } else {
      newFilteredData = topComponentData.filter(
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
      newFilteredData = topComponentData.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData["CurrentStatus"] === "Ongoing" &&
          rowData["CasinoBrand"] !== "Mirax (FS)" &&
          rowData["CasinoBrand"] !== "Katsubet (FS)" &&
          rowData["CasinoBrand"] !== "7Bit (FS)" &&
          rowData["Trendsetting"] === "1"
      );
    }

    const newTopData = topComponentData
      .filter((rowData) => rowData.Tech === brandValue)
      .map((item) => ({
        ...item,
        clas: "topbrand",
      }));

    const newFilteredDataWithTopData = newFilteredData.filter((dataItem) => {
      const existsInTopData = newTopData.some(
        (topDataItem) =>
          topDataItem["CasinoBrand"] === dataItem["CasinoBrand"]
      );
      return !existsInTopData;
    });



    if (newFilteredDataWithTopData.length === 0) {
      // setSelectedCountry("all");
    } else {
      setFilteredData(newFilteredDataWithTopData);
      setCarouselKey(prevKey => prevKey + 1);
    }
  }, [topComponentData, selectedCountry, ipDataCode, brandValue, currentLanguage]);

  return (
    <div className="mt-28">
      {filteredData.length > 0 && (
        <section className="trending" id="experience">
          <div className="container">
            {/* <div className="row align-items-center">
              <div className="col-12 col-lg-12 mb-12 mb-lg-0">
                <h2 className="display-1 font-black mb-3 heading" data-aos="fade-up">{t("Top Picks")}</h2>
              </div>
            </div> */}
            <OwlCarousel key={carouselKey} className='owl-carousel owl-theme' loop id="carouselTrending"  {...options} data-aos="fade-up">

              {filteredData.slice(0, 6).map((rowData, index) => (
                <Banner
                  brand={rowData["CasinoBrand"]}
                  link={rowData["GoBig"] + newUrl + "L_cyber-spin_1"}
                  bonus={rowData["OurOfferContent"]}
                  logo={rowData["LinkImg"]}
                  image="-1"
                  key={index}
                />
              )
              )}
            </OwlCarousel>
          </div>
        </section>
      )}
    </div>
  );
}

export default TopBrands;
