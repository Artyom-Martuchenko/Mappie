import {Card} from '../Card/Card';
import { SearchInput } from '../SearchInput/SearchInput';
import './SavedBar.css';

export function SavedBar({searchNameHandler}:{searchNameHandler:(value:string) => void}){
    return (
    <div className='second_sidebar_div'>
        <SearchInput searchNameHandler={searchNameHandler} />

        <h2 className='text_favourite'>Избранное:</h2>

        <div className="card_div">
            <Card />
            {/* {savedTopics.map((item) => <Card name={item.name} desc/>)} */}
        </div>
    </div>
    );
}