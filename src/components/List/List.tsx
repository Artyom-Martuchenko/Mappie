import './List.css';
import { useState } from 'react';
import { dummy_items } from '../../constants/constants';
import { Element, actionType } from './ListTypes';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function List ({radius, filterOptionsHandler}:{radius : number, filterOptionsHandler : (element : Element, action : actionType) => void}){
  const [items, setItems] = useState(dummy_items)

  const infrastructure = useSelector((state:RootState) => state.infrastructure.value)

  const itemFilter = (value : { kinds: string }) => {
    if(infrastructure.length !== 0 && radius !== 0){
      for(let index = 0; index < infrastructure.length; index++){
        if(infrastructure[index].kinds.includes(value.kinds)){
          return true
        } 
      }
    }
    return infrastructure.length == 0 || radius === 0
  }

  const itemHandler = (item : Element) => {
    if(item.active){
      filterOptionsHandler(item, 'delete')
      setItems((prev) => prev.filter((e) => e.id !== item.id))
      setItems((prev) => [...prev, {...item, active: false}])
    }else{
      filterOptionsHandler(item, 'add')
      setItems((prev) => prev.filter((e) => e.id !== item.id))
      setItems((prev) => [...prev, {...item, active: true}])
    }
  }

  return (
  <div className="list_border">
    <div className="scrolling">
      <div className="list">
        {items.filter((item) => itemFilter(item)).map((item) => <button className={item.active? "button_list_active": "button_list"} key={item.id} onClick={() => itemHandler(item)}>
          <img className="types_img" src={item.img} alt="type"/>
          <h4 className="types_text">{item.name}</h4>
        </button>)}
      </div>
    </div>
  </div>
  )
}