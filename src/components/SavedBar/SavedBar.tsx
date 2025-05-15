import {Card} from '../Card/Card';
import { SearchInput } from '../SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import {add, remove} from '../../store/reducers/savedTopicsSlice';
import './SavedBar.css';
import { RootState } from '../../store/index';

export function SavedBar({searchNameHandler}:{searchNameHandler:(value:string) => void}){
    const topics = useSelector((state:RootState) => state.savedTopics.value)
    return (
    <div className='second_sidebar_div'>
        <SearchInput searchNameHandler={searchNameHandler} />

        <h2 className='text_favourite'>Избранное:</h2>

        <div className="card_div">
            {topics.map((item : any) => <Card key={item.xid} item={item}/>)}
        </div>
    </div>
    );
}