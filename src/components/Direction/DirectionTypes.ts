export interface RoutingResponse {
  routes: {
    geometry: { coordinates: any[] }; //string { coordinates : number[][] }
    properties: object;
    distance: number;
    duration: number;
  }[];
  features: { geometry: { coordinates: any[] } }[];
}
