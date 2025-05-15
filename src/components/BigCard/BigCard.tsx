import "./BigCard.css";
import { useEffect, useState } from "react";
import no_image from "../../assets/no_image.png";
import adult from "@/18+.png";
import bank from "@/bank.png";
import church from "@/church.png";
import industry from "@/industry.png";
import sport from "@/sport.png";
import car from "@/car.png";
import shop from "@/shop.png";
import bicycle from "@/bicycle.png";
import park from "@/park.png";
import culture from "@/culture.png";
import food from "@/food.png";
import history from "@/history.png";
import hotels from "@/hotels.png";
import nature from "@/nature.png";
import other from "@/other.png";
import way from "@/way_big_card.png"
import car_icon from '@/icon_car_big_card.png';
import man from '@/icon_walking_big_card.png';
import saved from '@/favourite_big_card.png';
import save from '@/favourite_big_card_disactivate.png';
import { useParams } from "react-router";
import { fetchSearch } from "../../utils/fetchSearch";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/reducers/savedTopicsSlice"
import { AppDispatch, RootState } from "store";

export function BigCard() {
  const { xid } = useParams()
  console.log(`xid: ${xid}`)
  
  const savedTopics = useSelector((state:RootState)=>state.savedTopics.value)
  const dispatch = useDispatch<AppDispatch>()
  
  const [typeWay, setTypeWay] = useState<null | "drive" | "walk">(null);
  const [data, setData] = useState<any>()

  const searchDataHandler = (data : any) => {
    console.log(data)
    setData(data)
  }

  useEffect(()=>{
    if(typeof xid != "undefined"){
      fetchSearch({searchDataHandler, xid})
    }
  }, [xid])

  const clickHandler = ({method}:{method: 'add'|'remove'}) => {
    console.log(savedTopics);
    try{
      if (method === 'add') {
        dispatch(add({ element: data })); 
      } else {
        dispatch(remove({ xid: data.xid }));
      }
    } catch(err){
      throw err
    }
  };

  const defineType = (prop: string): string[] => {
    const typeMappings: { [key: string]: string } = {
      nature: nature,
      histor: history,
      industr: industry,
      car: car,
      shop: shop,
      market: shop,
      bicycl: bicycle,
      bank: bank,
      park: park,
      gym: sport,
      stadium: sport,
      cultur: culture,
      church: church,
      religion: church,
      food: food,
      adult: adult,
    };

    const result = Object.entries(typeMappings)
      .filter(([key]) => prop?.includes(key))
      .map(([, value]) => value);

    return result !== undefined && result.length > 0 ? result : ["other"];
  };

  const wayHandler = () => {
    setTypeWay((prev) => prev == null? "drive": prev === "drive"? "walk" : null)
  }

  return <>
    {typeof data !== 'undefined' &&
      <div className="big_cards_main">
        <div className="big_cards_photo">
          <img src={data?.preview?.source ?? no_image} alt="" />
        </div>
        <div id="big_cards_group">
          <div>
            <div className="big_cards_div">
              {defineType(data.kinds).map((item) => (
                <img className="big_cards_attributes" src={item} alt="" />
              ))}
            </div>
            <h2>{data.name}</h2>
            <h4 className="text">
              Описание: {data.wikipedia_extracts !== undefined && data.wikipedia_extracts.text !== undefined
                ? data.wikipedia_extracts.text
                : data.kinds}
            </h4>
            {data.wikipedia_extracts === undefined && <h4>
              Адрес: {data.address?.city_district}
              {"," + data?.address?.city}
              {"," + data?.address?.country}
            </h4>}
          </div>
          <div id="big_cards_group_buttons">
            {data !== undefined && savedTopics !== undefined && savedTopics.find((item:any) => item.xid === data.xid) ? 
              <button className="button_search_disactive" id="button_save_activate" onClick={() => clickHandler({method: 'remove'})}>
                <img className="icon_big_card" src={saved} alt=""/>
                <h3 className='font_big_card'>
                  Сохранено
                </h3>
              </button>
             : 
              <button className="button_search_disactive" id="button_save_disactivate" onClick={() => clickHandler({method: 'add'})}>
                <img className="icon_big_card" src={save} alt=""/>
                <h3 className='font_big_card'>
                  Сохранить
                </h3>
              </button>
            }

            {typeWay == null ? (
              <button className="button_search_disactive" id="button_search_disactivate" onClick={wayHandler}>
                <img className="icon_big_card" src={way} alt=""/>
                <h3 className='font_big_card'>
                  Маршрут
                </h3>
              </button>
            ) : typeWay === "drive" ? (
              <button className="button_search_disactive" id="button_search_drive" onClick={wayHandler}>
                <img id="icon_car" src={car_icon} alt=""/>
                <h3 className='font_big_card'>
                  На машине
                </h3>
              </button>
            ) : (
              <button className="button_search_disactive" id="button_search_walking" onClick={wayHandler}>
                <img className="icon_big_card" src={man} alt=""/>
                <h3 className='font_big_card'>
                  Пешком
                </h3>
              </button>
            )}
          </div>
        </div>
      </div>
    }
  </>
}
