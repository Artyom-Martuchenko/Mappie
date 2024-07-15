export interface ListItems {
  dist: number;
  point: { lon: number; lat: number };
  name: string;
  kinds: string;
  osm: string;
  xid: string;
  rate: number;
}

export interface Element {
  name: string;
  img: string;
  id: number;
  active: boolean;
  kinds: string;
}
