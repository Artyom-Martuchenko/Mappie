import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { SelectionData } from '../../constants/constants';

export function ResetCenterView({ selectPosition } : {selectPosition : SelectionData}) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lng),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);
  return <></>;
}