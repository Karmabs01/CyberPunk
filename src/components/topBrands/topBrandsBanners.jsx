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
    items: 1
};

function TopBrandsBanners({
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
        <div>
            {filteredData.length > 0 && (

                <section className="trending py-5" id="experience">
                    <div className="container">
                        {/* <div className="row align-items-center">
                        <div className="col-12 col-lg-12 mb-12 mb-lg-0">
                            <h2 className="display-1 font-black mb-3 heading" data-aos="fade-up">{t("Top Picks")}</h2>
                        </div>
                    </div> */}
                        <div className="row align-items-center mt-10">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0 " data-aos="fade-right">
                                {filteredData.slice(0, 1).map((rowData, index) => (
                                    <Banner
                                        key={index}
                                        brand="Biggest jackpot"
                                        link="https://topbon.us"
                                        bonus={rowData["OurOfferContent"]}
                                        image = "0"
                                    />
                                ))
                                }
                            </div>
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0" data-aos="fade-left">
                                {filteredData.slice(1, 2).map((rowData, index) => (
                                    <Banner
                                        key={index+1}
                                        brand="Exclusive offer"
                                        link="https://topbon.us"
                                        bonus={rowData["OurOfferContent"]}
                                        image = "4"

                                    />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default TopBrandsBanners;
