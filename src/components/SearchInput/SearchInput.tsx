import search_icon from "../../assets/search-icon.png";
import './SearchInput.css';

export function SearchInput({searchNameHandler}:{searchNameHandler : (value:string) => void}) {
  return (
    <div className="search_sidebar_div">
      <img src={search_icon} className="search_sidebar_icon" alt="" />
      <input
        type="text"
        className="search_sidebar_input"
        placeholder="Место, адрес..."
        onChange={(e)=>searchNameHandler(e.target.value)}
      />
    </div>
  );
}
