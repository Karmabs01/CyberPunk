import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import img from "../../images/hero/about.jpg";

import CountdownTimer from './countdownTimer';


function TimerBrands({
    newUrl,
    ipData,
    ipDataCode,
    currentLanguage,
    country,
    source,
    selectedCountry,
    setSelectedCountry,
}) {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);
    const [otherData, setOtherData] = useState([]);
    const [visibleBrands, setVisibleBrands] = useState(8);
    const [isMobile, setIsMobile] = useState(false);

    const DAYS_IN_MS = 1 * 12 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTime = NOW_IN_MS + DAYS_IN_MS;

    const handleShowMore = () => {
        setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
    };

    const apiOld = "https://bonusnumber1.com/api/brandsNew/read.php";
    const apiNew = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";

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
        // Добавьте обработчик для изменения размера окна
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        // Вызовите функцию обработчика при монтировании компонента
        handleResize();

        // Добавьте слушатель события изменения размера окна
        window.addEventListener("resize", handleResize);

        // Очистите слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const geo = selectedCountry.toUpperCase();

        const fetchData = async () => {
            try {
                let url;
                switch (source) {
                    case "partner1039":
                        url = apiNew; // Для partner1039
                        break;
                    case "partner1043":
                        url = api1043; // Для partner1043
                        break;
                    case "partner1044":
                        url = api1044; // Для partner1044
                        break;
                    default:
                        url = apiOld; // Для всех остальных случаев
                }

                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    // const dataArray = Object.values(responseData);

                    let filteredDataOther = [];

                    if (geo) {
                        filteredDataOther = responseData.brandsNew.filter(
                            (rowData) =>
                                rowData.GEO === geo &&
                                rowData["CurrentStatus"] === "Ongoing" &&
                                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                                rowData["High_hybrid"] === "1"
                        );
                    } else {
                        filteredDataOther = responseData.brandsNew.filter(
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
                        filteredDataOther = responseData.brandsNew.filter(
                            (rowData) =>
                                rowData.GEO === geo &&
                                rowData["CurrentStatus"] === "Ongoing" &&
                                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                                // rowData["FirstPriority"] === "1"
                                rowData["Trendsetting"] === "1"

                        );
                    }


                    // Перемешиваем данные перед отображением
                    setOtherData(shuffleArray(filteredDataOther));
                    setLoading(false);

                    // Если нет брендов, вызывать setSelectedCountry
                    // if (filteredDataOther.length === 0) {
                    //   setSelectedCountry("all");
                    // }
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
                setLoading(false);
            }
        };

        if ((ipDataCode && currentLanguage) || (geo && currentLanguage)) {
            fetchData();
        }
    }, [ipDataCode, currentLanguage, selectedCountry, source]);

    return (
        <div>
            <section id="table" className="table-section container mb-10">
                {otherData.length > 0 && (
                    <div>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-12 mb-12 mb-lg-0">
                        <h2 className="display-1 font-black mb-3 heading" data-aos="fade-up">{t("Night City best offers")}</h2>
                    </div>
                </div>
                <div className=" rounded-3xl bg-white py-1 mt-10" data-aos="fade-up">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-700">Top offers</h1>
                            </div>
                        </div> */}
                        <div className="-mx-4 mt-8 sm:-mx-0">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Brand
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            <span className="sr-only">BrandName</span>

                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Bonus
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Play</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                        {otherData.slice(0, 8).map((rowData) => (
                                            <tr key={rowData["CasinoBrand"]}>
                                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    <div className="h-11 w-11 flex-shrink-0">
                                                        <img alt="" src={rowData["LinkImg"]} className="h-11 w-11 rounded" />
                                                    </div>
                                                </td>
                                                <td className="py-4 pl-4 pr-3 text-sm font-bold text-gray-900 sm:pl-0">
                                                    {rowData["CasinoBrand"]}
                                                    <dl className="font-normal sm:hidden">
                                                        <dd className="text-gray-700">{rowData["OurOfferContent"]}</dd>
                                                    </dl>
                                                </td>
                                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{rowData["OurOfferContent"]}</td>
                                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <a href={rowData["GoBig"] + newUrl + "L_cyber-spin_1"} className="text-indigo-600 hover:text-indigo-900">
                                                        Play<span className="sr-only">,{rowData["CasinoBrand"]}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    


                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
                 )}
            </section >
        </div>


    );
}

export default TimerBrands;
