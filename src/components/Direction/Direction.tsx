import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Polyline } from "react-leaflet";
import { useEffect, useState } from "react";
import {RoutingResponse} from './DirectionTypes';

class OpenRouteService {
  private client: AxiosInstance;
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string, apiUrl: string) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
    this.client = axios.create({
      baseURL: this.apiUrl,
      headers: {
        Accept:
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
        Authorization: this.apiKey,
      },
    });
  }

  async getRoute(
    startLat: number,
    startLon: number,
    endLat: number,
    endLon: number,
    profile: "driving-car" | "foot-walking",
  ): Promise<RoutingResponse> {
    const response: AxiosResponse<RoutingResponse> = await this.client.get(
      `/${profile}`,
      {
        params: {
          start: `${startLon},${startLat}`,
          end: `${endLon},${endLat}`,
          options: "overview",
        },
      }
    );

    return response.data;
  }
}

export function Direction({
  start,
  end,
  profile,
}: {
  start: number[];
  end: number[];
  profile: "driving-car" | "foot-walking" | null;
}) {
  const apiKey = "5b3ce3597851110001cf62483fa5a58ee172490c9e958d4a7382d1dd";
  const apiUrl = "https://api.openrouteservice.org/v2/directions";
  if(apiKey === undefined || apiUrl === undefined){
    throw Error('Cant get process.env')
  }
  const ors = new OpenRouteService(apiKey, apiUrl);
  const [routeData, setRouteData] = useState<any[][]>([]);
  
  useEffect(()=>{
    if(profile !== null){
      ors
      .getRoute(Number(start[0].toFixed(6)), Number(start[1].toFixed(6)), Number(end[0].toFixed(6)), Number(end[1].toFixed(6)), profile)
      .then((response) => {
        const result = response.features[0].geometry.coordinates;
        setRouteData([])
        result.map((item) => setRouteData((prev) => [...prev, item.reverse()]));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [profile])
    
  return <>
    {profile !== null && <Polyline pathOptions={{ color: "red" }} positions={routeData}/>}  
  </>
}
