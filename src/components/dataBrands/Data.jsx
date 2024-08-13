import { useEffect, useState, useRef } from "react";
import OtherBrands from "../otherBrands/otherBrands";
import TimerBrands from "../TimerBrands/timerBrands";
import TopBrands from "../topBrands/topBrands";
import TopBrandsBanners from "../topBrands/topBrandsBanners";
import AnotherBrands from "../AnotherBrands/AnotherBrands";
import CTA from "../CTA"

import { useTranslation } from "react-i18next";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/dataSlice';


function ChildComponent() {
  const [ipData, setIpData] = useState(null);
  const [ipDataCode, setIpDataCode] = useState(null);
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const { t, i18n } = useTranslation();
  const selectRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const geo = selectedCountry.toUpperCase();

  let otherData = data.brandsNew;
  let topComponentData = data.brandsNew;
  let anotherBrands = data.brandsNew;

  const countryOptions = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "cz", name: "The Czech Republic", flag: "🇨🇿" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "dk", name: "Denmark", flag: "🇩🇰" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "hu", name: "Hungary", flag: "🇭🇺" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "sk", name: "Slovakia", flag: "🇸🇰" },
    { code: "all", name: "World", flag: "🌍" },
  ];
  const countryOptions1043 = [
    { code: "all", name: "World", flag: "🌍" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "us", name: "USA", flag: "usa" },
  ];

  const countryOptions1044 = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "all", name: "World", flag: "🌍" },
  ];

  const countryOptions1039 = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "cz", name: "The Czech Republic", flag: "🇨🇿" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "dk", name: "Denmark", flag: "🇩🇰" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "gb", name: "Great Britain", flag: "🇬🇧" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "hu", name: "Hungary", flag: "🇭🇺" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "pt", name: "Portugal", flag: "🇵🇹" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "sk", name: "Slovakia", flag: "🇸🇰" },
    { code: "all", name: "World", flag: "🌍" },
  ];

  const countryOptionsCLD_VIP = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "cz", name: "The Czech Republic", flag: "🇨🇿" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "dk", name: "Denmark", flag: "🇩🇰" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "gb", name: "Great Britain", flag: "🇬🇧" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "hu", name: "Hungary", flag: "🇭🇺" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "pt", name: "Portugal", flag: "🇵🇹" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "sk", name: "Slovakia", flag: "🇸🇰" },
    { code: "all", name: "World", flag: "🌍" },
  ];

  let countryOptionsValue = []
  switch (source) {
    case "partner1039":
      countryOptionsValue = countryOptions1039; // Для partner1039
      break;
    case "partner1043":
      countryOptionsValue = countryOptions1043; // Для partner1043
      break;
    case "partner1044":
      countryOptionsValue = countryOptions1044; // Для partner1044
      break;
    case "CLD_VIP":
      countryOptionsValue = countryOptionsCLD_VIP; // CLD_VIP
      break;
    case "partner1045":
      countryOptionsValue = countryOptionsCLD_VIP; // CLD_VIP
      break;
    default:
      countryOptionsValue = countryOptions; // Для всех остальных случаев
  }

  useEffect(() => {
    fetch(
      "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
    )
      .then((response) => response.json())
      .then((data) => {
        setIpData(data.country_name);
        setIpDataCode(data.country);
        setSelectedCountry(data.country.toLowerCase());
        console.log("THIS GEO:", data.country_name, data.country)
      })
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("brand");
    const currentSource = searchParams.get("keyword");
    let sourceValue = "0";

    if (currentSource) {
      const match = currentSource.match(/(partner(_)?\d+|CLD_VIP)/);
      if (match) {
        sourceValue = match[0];
        setSource(sourceValue);
      } else {
        setSource("0");
      }
    } else {
      setSource("0");
    }
    searchParams.set("source", sourceValue);
    searchParams.set("creative_id", "");
    const queryString = `?${searchParams.toString()}`;
    setNewUrl(queryString);
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    console.log("COUNTRY:", country)
    if (country == "au" || country == "ca" || country == "ie" || country == "nz" || country == "usa") {
      i18n.changeLanguage("all");
    } else {
      i18n.changeLanguage(country);
    }
    localStorage.setItem("selectedCountry", country);
    document.documentElement.classList.remove("fixed-position");
    console.log("handleCountryChange")

  };

  const handleMouseDown = () => {
    document.documentElement.classList.add("fixed-position");
    console.log("handleMouseDown")

  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      document.documentElement.classList.remove("fixed-position");
      console.log("handleClickOutside")
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <TopBrands
        topComponentData={topComponentData}
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      {/* <AnotherBrands
        anotherBrands={anotherBrands}
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
      /> */}
      <div className="select-brand container mt-2.5 mb-2.5">
        <Box sx={{ m: 1, minWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel>{t("select")}</InputLabel>
            <Select
              id="countrySelect"
              value={selectedCountry}
              label={t("select")}
              ref={selectRef}
              onMouseDown={handleMouseDown}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              {countryOptionsValue.map((country, index) => (
                <MenuItem
                  key={index}
                  value={country.code}
                  selected={country.code === ipDataCode}
                >
                  <div className={country.code}></div>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <OtherBrands
        otherData={otherData}
        newUrl={newUrl}
        ipData={ipData}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <TopBrandsBanners
        topComponentData={topComponentData}
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />


      <TimerBrands
        newUrl={newUrl}
        ipData={ipData}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />


      <CTA
        newUrl={newUrl}
      />
    </div>
  );
}

export default ChildComponent;
