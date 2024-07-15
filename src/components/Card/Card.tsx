import save_symbol from '@/save_cards.png';
import arrow_symbol from '@/arrow_cards.png';
import culture from '@/culture.png';
import history from '@/history.png';
import './Card.css';

export function Card(){
    return(
        <div className='card'>
            <div className='head'>
                <div className='photo'>
                    <img src={culture} className='attributes' alt='attributes'/>
                    <img src={history} className='attributes' alt='attributes'/>
                </div>
                <h3 className='name'>Name</h3>
            </div>
            <h2 className='description'>description</h2>
            <div className='low_buttons'>
                <img src={save_symbol} alt='save symbol'/>
                <img src={arrow_symbol} alt='arrow symbol'/>
            </div>
        </div>
    )
}