import './BigCard.css';
import {useState} from 'react';

export function BigCard({data}:{data : any}) {
  const [active, setActive] = useState(false);

  const clickHandler = () =>{
    setActive((prev) => !prev);
  }

  return (
    <div className="big_cards_main">
      <div className="big_cards_photo" />
      <div id="big_cards_group">
        <div>
          <div className="big_cards_div">
            <div className="big_cards_attributes"/>
            <div className="big_cards_attributes"/>
          </div>
          <h2>{data.name}</h2>
          <h4 className='text'>Описание: {data.wikipedia_extract !== undefined && data.wikipedia_extracts.text !== undefined? data.wikipedia_extracts.text : data.kinds}</h4>
          <h4>Адресс: {data.address.city_district}{',' + data.address.city}{',' + data.address.country}</h4>
        </div>
        <div id="big_cards_group_buttons">
          {active ? <button className='button_save_active' onClick={clickHandler}>Сохранено</button> : <button className='button_save_disactive' onClick={clickHandler}>Сохранить</button>}
          <button className='button_search_disactive'>Маршрут</button>
        </div>
      </div>
    </div>
  );
}
