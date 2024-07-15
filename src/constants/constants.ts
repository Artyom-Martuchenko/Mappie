import culture from'@/culture.png';
import nature from'@/nature.png';
import history from '@/history.png';
import industry from'@/Property 1=fa-solid_industry.png';
import car from'@/Property 1=fa_car.png';
import market from'@/Property 1=fontisto_shopping-basket.png';
import bank from'@/bank.png';
import park from'@/Property 1=majesticons_ferris-wheel.png';
import bicycle_road from'@/Property 1=ph_bicycle.png';
import cenzured from'@/18+.png';
import sport from'@/Property 1=fluent_sport-soccer-16-filled.png';
import church from'@/church.png';
import food from'@/food.png';
import hotels from'@/hotels.png';
import intresting_places from '@/other.png';
import { Icon } from 'leaflet';


export interface ListItems {
  dist: number;
  point: { lon: number; lat: number };
  name: string;
  kinds: string;
  osm: string;
  xid: string;
  rate: number;
}

export interface SelectionData {
  lat: number;
  lng: number;
}

export interface Element {
  name: string;
  img: string;
  id: number;
  active: boolean;
  kinds: string;
}

export type actionType = "delete" | "add";

interface Mode {
  saved: boolean;
  search: boolean;
}

export interface Prop {
  savedHandler: (arg: string) => void;
  mode: Mode;
}

export interface List {
  listInfrastructure: ListItems[];
  filterOptions: Element[];
}

export const Marker_icon_width = 30;
export const Marker_icon_height = 30;

export const minsk_center_latitude = 53.904109;
export const minsk_center_longitude = 27.567796;

export const kinds = [
  "accomodations",
  "adult",
  "amusements",
  "cultural",
  "historic",
  "industrial_facilities",
  "natural",
  "other",
  "religion",
  "sport",
  "banks",
  "foods",
  "shops",
  "transport",
];

export const dummy_items = [
  {
    id: 0,
    name: "Природа",
    img: nature,
    kinds: 'nature',
    active: false,
  },
  {
    id: 1,
    name: "Культура",
    img: culture,
    kinds: 'cultur',
    active: false,
  },
  {
    id: 2,
    name: "История",
    img: history,
    kinds: "histor",
    active: false,
  },
  {
    id: 3,
    name: "Промышленность",
    img: industry,
    kinds: "industr",
    active: false,
  },
  {
    id: 4,
    name: "Сервисы для авто",
    img: car,
    kinds: "car",
    active: false,
  },
  {
    id: 5,
    name: "Магазины",
    img: market,
    kinds: "shop",
    active: false,
  },
  {
    id: 7,
    name: "Парк",
    img: park,
    kinds: "park",
    active: false,
  },
  {
    id: 8,
    name: "Банк",
    img: bank,
    kinds: "bank",
    active: false,
  },
  {
    id: 9,
    name: "Велосипедная дорожка",
    img: bicycle_road,
    kinds: "bicycl",
    active: false,
  },
  {
    id: 10,
    name: "18+",
    img: cenzured,
    kinds: "adult",
    active: false,
  },
  {
    id: 11,
    name: "Спорт",
    img: sport,
    kinds: "sport",
    active: false,
  },
  {
    id: 12,
    name: "Церковь",
    img: church,
    kinds: "religion",
    active: false
  },
  {
    id: 13,
    name: "Интересные места",
    img: intresting_places,
    kinds: "other",
    active: false
  },
  {
    id: 14,
    name: "Еда",
    img: food,
    kinds: "food",
    active: false
  },
  {
    id: 15,
    name: "Аппартаменты",
    img: hotels,
    kinds: "accomodations",
    active: false
  },
]

export const customNature = new Icon({
  iconUrl: require("../assets/nature.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customHistory = new Icon({
  iconUrl: require("../assets/history.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customIndustry = new Icon({
  iconUrl: require("../assets/Property 1=fa-solid_industry.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customCar = new Icon({
  iconUrl: require("../assets/Property 1=fa_car.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customShop = new Icon({
  iconUrl: require("../assets/Property 1=solar_shop-2-bold.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customBicycleRoad = new Icon({
  iconUrl: require("../assets/Property 1=solar_shop-2-bold.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customPark = new Icon({
  iconUrl: require("../assets/Property 1=majesticons_ferris-wheel.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customCenzured = new Icon({
  iconUrl: require("../assets/18+.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customSport = new Icon({
  iconUrl: require("../assets/Property 1=fluent_sport-soccer-16-filled.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customBank = new Icon({
  iconUrl: require("../assets/bank.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customCulture = new Icon({
  iconUrl: require("../assets/culture.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const other = new Icon({
  iconUrl: require("../assets/other.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customChurch = new Icon({
  iconUrl: require("../assets/church.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customFood = new Icon({
  iconUrl: require("../assets/food.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});

export const customHotels = new Icon({
  iconUrl: require("../assets/hotels.png"),
  iconSize: [Marker_icon_width, Marker_icon_height],
});