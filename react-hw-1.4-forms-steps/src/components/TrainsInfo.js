/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import TrainItem from './TrainItem';

export default function TrainsInfo({onDelete, trainsArr}) {
    const arr = [...trainsArr];
    arr.sort((a, b) => {
        const day = a.date.slice(0, 2);
        const month = a.date.slice(3, 5);
        const year = a.date.slice(8,10);
        const aFormat = new Date(`${month}, ${day}, ${year}`).getTime();
        const bDay = b.date.slice(0, 2);
        const bMonth = b.date.slice(3, 5);
        const bYear = b.date.slice(8,10); 
        const bFormat = new Date(`${bMonth}, ${bDay}, ${bYear}`).getTime();
        return bFormat - aFormat;
    });

    console.log(trainsArr);
    console.log(arr);

    return (
        <div className='TrainsInfo'>
            <header className='TrainsHeader'>
                <div className='TrainsHeaderDate'>Дата (ДД.ММ.ГГ)</div>
                <div className='TrainsHeaderDist'>Пройдено км</div>
                <div className='TrainsHeaderActions'>Действия</div>
            </header>
            <div className='TrainsInfoTable'>
                {arr.map((item) => {
                    return <TrainItem key={item.id} item={item} onDelete={onDelete} />
                })}
            </div>
        </div>
    )
}

TrainsInfo.propTypes = {
    trainsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};

TrainsInfo.defaultProps = {
    trainsArr: [],
};