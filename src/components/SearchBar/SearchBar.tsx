import { actionType, Element, ListItems } from './SearchBarTypes';
import search_btn from '../../assets/search-btn/big-2.png';
import { List } from "../List/List";
import './SearchBar.css';
import { SearchInput } from "../SearchInput/SearchInput";

export function SearchBar({
  radius,
  infrastructure,
  filterOptionsHandler,
  radiusHandler,
  searchNameHandler,
}: {
  radius: number;
  infrastructure: ListItems[];
  filterOptionsHandler: (element : Element, action : actionType) => void,
  radiusHandler: (value: number) => void;
  searchNameHandler: (value : string) => void;
}) {
  return (
    <div className="second_sidebar_div">
      <SearchInput searchNameHandler={searchNameHandler}/>
      <h3 className="text_favourite">Искать:</h3>
      <List
        radius={radius}
        infrastructure={infrastructure}
        filterOptionsHandler={filterOptionsHandler}
      />
      <h3 className="text_favourite">В радиусе</h3>
      <div className="RadiusDiv">
        <input
          type="number"
          className="RadiusInput"
          placeholder="5"
          onChange={(val) => radiusHandler(Number(val.target.value))}
        />
        <h3 className="RadiusText">км</h3>
      </div>
      <div className="search_btn_div">
        <button className="search_btn">
          <img className="search_img" src={search_btn} alt="search_button" />
        </button>
      </div>
    </div>
  );
}