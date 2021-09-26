import PropTypes from 'prop-types';

export default function TrainForm({ form, onSubmit, onChange }) {
    console.log(form);
    return (
        <form className='TrainForm' onSubmit={onSubmit}>
            <div className='DateBox'>
                <label>Дата (ДД.ММ.ГГ)</label>
                <input className='DateInput' name='date' value={form.date} onChange={onChange}></input>
            </div>
            <div className='DistBox'>
                <label>Пройдено км</label>
                <input className='DistInput' name='distance' value={form.distance} onChange={onChange}></input>   
            </div>
            <div className='FormBtn'>
                <button className='OkBtn'>OK</button>
            </div>
        </form>
    );
}

TrainForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};


TrainForm.defaultProps = {
    form: {date: '', distance: ''}
};