import PropTypes from 'prop-types';

export default function TrainItem({item, onDelete}) {
    console.log(item);
    return (
        <div className='TrainItem'>
            <div className='TrainDate'>{item.date}</div>
            <div className='TrainDist'>{Number(item.distance)}</div>
            <button className='DeleteBtn' onClick={onDelete(item.id)}>X</button>
        </div>
    );
}

TrainItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}