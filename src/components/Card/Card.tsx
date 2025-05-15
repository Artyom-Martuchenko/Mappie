import save_symbol from '@/save_cards.png';
import arrow_symbol from '@/arrow_cards.png';
import culture from '@/culture.png';
import history from '@/history.png';
import './Card.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { remove } from '../../store/reducers/savedTopicsSlice';
import { useNavigate } from 'react-router';

export function Card({ item }:{ item : any}){
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    
    const saveHandler = () => {
        dispatch(remove({xid: item.xid}))
    }
    
    const arrowHandler = () => {
        navigate('/search/detail/' + item.xid)
    }

    return(
        <div className='card'>
            <div className='head'>
                <div className='photo'>
                    <img src={culture} className='attributes' alt='attributes'/>
                    <img src={history} className='attributes' alt='attributes'/>
                </div>
                <h3 className='name'>{item.name}</h3>
            </div>
            <h2 className='description'>{item.description}</h2>
            <div className='low_buttons'>
                <button onClick={()=>saveHandler()}>
                    <img src={save_symbol} alt='save symbol'/>
                </button>
                <button onClick={()=>arrowHandler()}>
                    <img src={arrow_symbol} alt='arrow symbol'/>
                </button>
            </div>
        </div>
    )
}