import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";

import React, { useEffect, useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/20/solid'
import play from "../../img/play.png"

function OtherBrands({
  otherData = [],
  newUrl,
  ipData,
  ipDataCode,
  currentLanguage,
  country,
  source,
  selectedCountry,
  setSelectedCountry,
}) {
  const stepSize = 6
  const [step, setStep] = useState(stepSize);
  const [isAllElements, setAllElements] = useState(false);
  const [visibleData, setVisibleData] = useState([]);

  const { t } = useTranslation();

  function showData(array) {
    const showedArray = array.slice();
    if (showedArray.length > step) {
      setAllElements(false);
      return showedArray.slice(0, step);
    } else {
      setAllElements(true);
      return showedArray;
    }
  }


  useEffect(() => {

    const geo = selectedCountry.toUpperCase();
    let filteredDataOther = [];

    if (geo) {
      filteredDataOther = otherData.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData.CurrentStatus === "Ongoing" &&
          rowData.CasinoBrand !== "Mirax (FS)" &&
          rowData.CasinoBrand !== "Katsubet (FS)" &&
          rowData.CasinoBrand !== "7Bit (FS)" &&
          rowData.High_hybrid === "1"
      );
    } else {
      filteredDataOther = otherData.filter(
        (rowData) =>
          rowData.GEO === ipDataCode &&
          rowData.CurrentStatus === "Ongoing" &&
          rowData.CasinoBrand !== "Mirax (FS)" &&
          rowData.CasinoBrand !== "Katsubet (FS)" &&
          rowData.CasinoBrand !== "7Bit (FS)" &&
          rowData.High_hybrid === "1"
      );
    }

    if (geo === "ALL") {
      filteredDataOther = otherData.filter(
        (rowData) =>
          rowData.GEO === geo &&
          rowData.CurrentStatus === "Ongoing" &&
          rowData.CasinoBrand !== "Mirax (FS)" &&
          rowData.CasinoBrand !== "Katsubet (FS)" &&
          rowData.CasinoBrand !== "7Bit (FS)" &&
          rowData.Segment2 !== ""
      );
    }

    if (filteredDataOther.length !== 0) {
      if (geo !== "ALL") {
        const arrLength = filteredDataOther.length / 2;
        setVisibleData(showData(filteredDataOther.slice(arrLength)));
      } else {
        setVisibleData(showData(filteredDataOther));
      }
    }

  }, [otherData, step, selectedCountry, ipDataCode]);

  const loadMoreItems = () => {
    setStep(prevIndex => prevIndex + stepSize);
  };

  if (!otherData) {
    return <Loader />;
  }

  return (
    <div className="container mb-10">
      {visibleData.length > 0 && (
        <div>
          <div className="row align-items-center mb-6">
            <div className="col-12 col-lg-12 mb-lg-0">
              <h2 className="display-1 font-black mb-3 heading" data-aos="fade-up">{t("Cyber City Jackpot")}</h2>
            </div>
          </div>
          <div className="rounded-3xl bg-gray-900 mb-10">
            <div className="collection-view grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 py-2.5 px-2.5 sm:py-5 sm:px-5 " data-aos="fade-up">
              {visibleData.map((rowData, index) => (
                <a key={index} href={rowData["GoBig"] + newUrl + "L_cyber_jackpot"} target="blank_"
>
                  <div
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-900/50 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:bg-gray-600/50"
                  >
                    <div className="flex-shrink-0">
                      <img alt="" src={rowData["LinkImg"]} className="h-20 w-20 rounded" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="focus:outline-none">
                        <div className="flex-1 text-xl">
                          <p className="text-sm sm:text-base font-black">{rowData["OurOfferContent"]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex shrink-0 pr-2">
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <PlayCircleIcon aria-hidden="true" className="h-15 w-15" />
                        {/* <img src={play} alt="play" />  */}
                      </button>
                    </div>
                  </div>
                </a>

              ))}
            </div>
          </div>
        </div>
      )}
    </div>

  );

}


export default OtherBrands;
