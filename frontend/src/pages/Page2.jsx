import React from "react";
import "../index.scss";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Page2({
  dateEvMin,
  setDateEvMin,
  dateEvMax,
  setDateEvMax,
  favoritesFilter,
  setFavoritesFilter,
  favorites,
  setFavorites,
  dept,
  setDept,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  free,
  setFree,
  api,
  categ,
  setCateg,
  calend,
  setCalend,
}) {
  function handleString(str) {
    if (str !== undefined) {
      if (str.match(/\|(\d+,\d+?)\|/g) === null) {
        if (str.indexOf("€") !== -1) {
          if (str.match(/(\d+?)€/g) === null) {
            return str.match(/(\d+?) €/g);
          }
          return str.match(/(\d+?)€/g);
        }
        return [0];
      }
      return str
        .match(/\|(\d+,\d+?)\|/g)
        .join("")
        .replace(/\|/g, "")
        .replace(/,/g, ".")
        .trim()
        .split(" ")
        .map((e) => Number(e));
    }
    return [0];
  }

  const handleDate = (str) => {
    let dates = [];
    dates = str
      .match(/(\d+\/\d+\/\d+)\|\|/g, "")
      .map((e) => e.replace(/\|/g, ""));

    dates = dates.map((e) => {
      const tab = e.split("");
      tab.splice(6, 0, tab[0]);
      tab.splice(7, 0, tab[1]);
      tab.splice(8, 0, tab[2]);
      tab.shift();
      tab.shift();
      tab.shift();
      return tab.join("");
    });

    dates = dates.map((e) => new Date(e));
    return dates;
  };

  return (
    <>
      <div className="containerSidebarCards">
        <Sidebar
          dateEvMin={dateEvMin}
          setDateEvMin={setDateEvMin}
          dateEvMax={dateEvMax}
          setDateEvMax={setDateEvMax}
          favoritesFilter={favoritesFilter}
          setFavoritesFilter={setFavoritesFilter}
          favorites={favorites}
          setFavorites={setFavorites}
          dept={dept}
          setDept={setDept}
          free={free}
          setFree={setFree}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          api={api}
          categ={categ}
          setCateg={setCateg}
          calend={calend}
          setCalend={setCalend}
        />

        {api &&
          api
            .filter((e) => {
              return (
                handleDate(e.fields.ouverturegranule).filter((el) => {
                  return el <= new Date(dateEvMax) && el >= new Date(dateEvMin);
                }).length !== 0
              );
            })
            .filter((e) => {
              return (
                minValue <= Math.min(...handleString(e.fields.tarifs)) &&
                maxValue >= Math.max(...handleString(e.fields.tarifs))
              );
            })
            .filter((e) => {
              if (dept === "All") {
                return e;
              }
              return dept === "Sans Département"
                ? e.fields.departement === undefined
                : e.fields.departement === dept;
            })
            .filter((e) => {
              if (categ === "All") {
                return e;
              }
              return categ === "Sans categorie"
                ? e.fields.categorie === undefined
                : e.fields.categorie === categ;
            })
            .filter((e) => {
              if (free === "Payant") {
                return e.fields.tarifgratuit === "non";
              }
              if (free === "Gratuit") {
                return e.fields.tarifgratuit === "oui";
              }
              return e;
            })
            .map((e) => {
              return (
                <Card
                  id={e.recordid}
                  event={e.fields.nomoffre}
                  category={e.fields.categorie}
                  adress={e.fields.adresse2}
                  departement={e.fields.departement}
                  price={e.fields.tarifgratuit}
                  eventPrice={e.fields.tarifs}
                  payment={e.fields.modepaiement}
                  date={e.fields.ouverturegranule}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              );
            })}
      </div>
      <Footer />
    </>
  );
}

export default Page2;

Page2.propTypes = {
  api: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  calend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCalend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCateg: PropTypes.string.isRequired,
  setDept: PropTypes.string.isRequired,
  minValue: PropTypes.string.isRequired,
  setMinValue: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
  setMaxValue: PropTypes.string.isRequired,
  free: PropTypes.string.isRequired,
  setFree: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired,
  categ: PropTypes.string.isRequired,
  dateEvMin: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  dateEvMax: PropTypes.string.isRequired,
  setDateEvMax: PropTypes.string.isRequired,
  favoritesFilter: PropTypes.string.isRequired,
  setFavoritesFilter: PropTypes.string.isRequired,
  favorites: PropTypes.string.isRequired,
  setFavorites: PropTypes.string.isRequired,
};
