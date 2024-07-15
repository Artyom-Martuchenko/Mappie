import { Marker, Popup } from "react-leaflet";
import {
  Element,
  ListItems,
  customNature,
  customHistory,
  customIndustry,
  customCar,
  customShop,
  customBicycleRoad,
  customBank,
  other,
  customPark,
  customSport,
  customCulture,
  customChurch,
  customHotels,
  customFood,
  customCenzured,
} from "../../constants/constants";

export interface List {
  listInfrastructure: ListItems[];
  filterOptions: Element[];
  searchName: string | undefined;
  endPositionHandler: (
    value: number[] | null,
    profile: "driving-car" | "foot-walking" | null
  ) => void;
  xidHandler: (value: any) => any;
}

export function ListInfrastructure({
  listInfrastructure,
  filterOptions,
  endPositionHandler,
  searchName,
  xidHandler,
}: List) {
  const keywords = [
    "nature",
    "histor",
    "industr",
    "car",
    "shop",
    "market",
    "bicycl",
    "bank",
    "park",
    "gym",
    "stadium",
    "cultur",
    "church",
    "religion",
    "food",
    "adult",
    "accomodations",
  ].sort();

  const defineType = (prop: string) => {
    if (prop.includes("nature")) {
      return customNature;
    } else if (prop.includes("histor")) {
      return customHistory;
    } else if (prop.includes("industr")) {
      return customIndustry;
    } else if (prop.includes("car")) {
      return customCar;
    } else if (prop.includes("shop") || prop.includes("market")) {
      return customShop;
    } else if (prop.includes("bicycl")) {
      return customBicycleRoad;
    } else if (prop.includes("bank")) {
      return customBank;
    } else if (prop.includes("park")) {
      return customPark;
    } else if (prop.includes("gym") || prop.includes("stadium")) {
      return customSport;
    } else if (prop.includes("cultur")) {
      return customCulture;
    } else if (prop.includes("church") || prop.includes("religion")) {
      return customChurch;
    } else if (prop.includes("food")) {
      return customFood;
    } else if (prop.includes("adult")) {
      return customCenzured;
    } else if (prop.includes("accomodations")) {
      return customHotels;
    } else {
      return other;
    }
  };

  const filterInfrastructure = (infrastructure: any, searchName: string) => {
    if (filterOptions.length != 0) {
      for (let index = 0; index < filterOptions.length; index++) {
        if (infrastructure.kinds.includes(filterOptions[index].kinds)) {
          return true;
        }
      }
    }

    if (searchName !== "") {
      if (infrastructure.name.includes(searchName)) {
        return true;
      } else {
        return false;
      }
    }

    return filterOptions.length == 0;
  };

  return (
    <div>
      {listInfrastructure
        .filter((infrastructure) =>
          filterInfrastructure(
            infrastructure,
            typeof searchName === "undefined" ? "" : searchName
          )
        )
        .map((el: ListItems) => (
          <Marker
            position={{ lat: el.point.lat, lng: el.point.lon }}
            key={Math.random()} //el.xid
            icon={defineType(el.kinds)}
          >
            <Popup>
              <h3>{el.name}</h3>
              <select
                title="type_moving"
                onChange={(e: any) =>
                  e.target.value != ""
                    ? endPositionHandler(
                        [el.point.lat, el.point.lon],
                        e.target.value
                      )
                    : endPositionHandler(null, null)
                }
              >
                <option value="">-</option>
                <option value="foot-walking">Добраться пешком</option>
                <option value="driving-car">Добраться на машине</option>
              </select>
              <button onClick={() => xidHandler(el.xid)}>Info</button>
            </Popup>
          </Marker>
        ))}
    </div>
  );
}
