import "./SideBar.css";
import { FirstSideBar } from "../FirstSideBar/FirstSideBar";
import { SavedBar } from "../SavedBar/SavedBar";
import { SearchBar } from "../SearchBar/SearchBar";
import { BigCard } from "../BigCard/BigCard";
import back_arrow from "@/arrow_back.png";
import { actionType, Element, ListItems } from "./SideBarTypes";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router";

export function SideBar({
  radius,
  radiusHandler,
  filterOptionsHandler,
  searchName,
  searchNameHandler,
  xidHandler,
  xid,
}: {
  radius: number;
  radiusHandler: (value: number) => void;
  searchName: string | undefined;
  searchNameHandler: (value: string) => void;
  filterOptionsHandler: (element: Element, action: actionType) => void;
  xidHandler: (value: undefined) => void;
  xid: string | undefined;
}) {

  const navigate = useNavigate()

  const backHandler = () => {
    navigate('/search')
  };

  return (
    <div id="sidebar">
      <FirstSideBar />
      <Routes>
        <Route
          path="saved"
          element={<SavedBar searchNameHandler={searchNameHandler} />}
        />
        <Route
          path="search"
          element={
            <SearchBar
              radius={radius}
              filterOptionsHandler={filterOptionsHandler}
              radiusHandler={radiusHandler}
              searchNameHandler={searchNameHandler}
            />
          }
        />
        <Route
          path="search/detail/:xid"
          element={
            <div className="details_div">
              <button className="back_group" onClick={backHandler}>
                <img className="back_arrow" src={back_arrow} alt="" />
                <h3 className="back_operations">Вернуться</h3>
              </button>
              <BigCard />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
