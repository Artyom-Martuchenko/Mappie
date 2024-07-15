import { useState } from "react";
import "./SideBar.css";
import { FirstSideBar } from "../FirstSideBar/FirstSideBar";
import { fetchSearch } from "../../utils/fetchSearch";
import { SavedBar } from "../SavedBar/SavedBar";
import { SearchBar } from "../SearchBar/SearchBar";
import { BigCard } from "../BigCard/BigCard"
import { useEffect } from "react";
import { actionType, Element, ListItems } from "./SideBarTypes";

export function SideBar({
  radius,
  radiusHandler,
  infrastructure,
  filterOptionsHandler,
  searchName,
  searchNameHandler,
  xidHandler,
  xid,
}: {
  radius: number;
  radiusHandler: (value: number) => void;
  infrastructure: ListItems[];
  searchName: string | undefined;
  searchNameHandler: (value: string) => void;
  filterOptionsHandler: (element: Element, action: actionType) => void;
  xidHandler: (value: undefined) => void
  xid: string | undefined;
}) {
  const [mode, setMode] = useState({ saved: false, search: false });
  const [searchData, setSearchData] = useState<any>();
  const [savedTopics, setSavedTopics]= useState()

  const searchDataHandler = (value: any) => {
    setSearchData(value);
  };

  useEffect(() => {
    if (typeof xid != "undefined") {
      fetchSearch({ searchDataHandler, xid });
    }
    
    if(mode.saved || mode.search){
      savedHandler(mode.saved? 'saved' : 'search')
    }
  }, [xid]);

  const backHandler = () => {
    setSearchData(undefined)
    xidHandler(undefined)
  }

  const savedHandler = (prop: string) => {
    setMode((prevState) => {
      return prop == "saved"
        ? !prevState.search
          ? { ...prevState, saved: !prevState.saved }
          : { search: !prevState.search, saved: !prevState.saved }
        : !prevState.saved
        ? { ...prevState, search: !prevState.search }
        : { search: !prevState.search, saved: !prevState.saved };
    });
  };

  return (
    <div id="sidebar">
      <FirstSideBar mode={mode} savedHandler={savedHandler} />
      {mode.saved && typeof xid === "undefined" && (
        <SavedBar searchNameHandler={searchNameHandler}/>
      )}
      {mode.search && typeof xid === "undefined" && (
        <SearchBar
          radius={radius}
          infrastructure={infrastructure}
          filterOptionsHandler={filterOptionsHandler}
          radiusHandler={radiusHandler}
          searchNameHandler={searchNameHandler}
        />
      )}
      {typeof xid !== "undefined" && typeof searchData !== "undefined" && (
        <div className="details_div">
          <button onClick={backHandler}>Вернуться</button>
          <BigCard data={searchData.data}/>
        </div>
      )}
    </div>
  );
}
