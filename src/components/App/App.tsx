import { SideBar } from "../SideBar/SideBar";
import {Route} from "react-router";
import { Map } from "../Map/Map";
import { useState } from "react";
import './App.css';
import {ListItems, actionType, Element} from '../../constants/constants'; 

export const App = () => {
  const [radius, setRadius] = useState(0)
  const [infrastructure, setInfrastructure] = useState<ListItems[]>([]);
  const [filterOptions, setFilterOptions] = useState<Element[]>([])
  const [searchName, setSearchName] = useState<string | undefined>(undefined)
  const [xid, setXid] = useState<string | undefined>(undefined)

  const xidHandler = (value : string | undefined) => {
    setXid(value)
  }

  const searchNameHandler = (value: string) => {
    setSearchName(value);
    console.log(value)
  };

  // const infrastructureHandler = (value: ListItems[]) => {
  //   setInfrastructure(value.length > 0? (prev) => [...prev, ...value] : [])
  // }

  const radiusHandler = (value : number) =>{
    setRadius(value * 1000)//Используется один раз, для перевода из километров в метры
  }

  const filterOptionsHandler = (element : Element, action : actionType) => {
    if(action == 'add'){
      setFilterOptions((prev) => [...prev, element]);
    }else{
      setFilterOptions((prev) => prev.filter((elem : Element) => elem.name != element.name))
    }
  }

  return (
    <div className="app">
      <SideBar xid={xid} xidHandler={xidHandler} searchName={searchName} searchNameHandler={searchNameHandler} radius={radius} radiusHandler={radiusHandler} filterOptionsHandler={filterOptionsHandler}/>
      <Map xidHandler={xidHandler} searchName={searchName} radius={radius} filterOptions={filterOptions} />
    </div>
  );
};

export default App;