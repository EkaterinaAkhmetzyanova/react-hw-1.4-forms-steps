import { useState } from 'react';
import { nanoid } from 'nanoid';
import TrainForm from './TrainForm';
import TrainsInfo from './TrainsInfo';

export default function TrainItem() {
    const [trainsArr, setTrains] = useState([]);
    const [form, setForm] = useState({date: '', distance: ''});

    const checkDate = (string) => {
        const reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return reg.test(string);
    }

    const checkDistance = (string) => {
        const reg = /[0-9]/;
        return reg.test(string);
    }

    const handleChange = ({ target }) => {
        setForm(prevForm => ({ ...prevForm, [target.name]: target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(checkDistance(form.distance));
        console.log(checkDate(form.date));
        if (!checkDate(form.date) || !checkDistance(form.distance) || form.date === '' || form.distance === '') {
            alert('Введите значение в указанном формате');
            return;
        }
        const trainIndex = trainsArr.findIndex((item) => item.date === form.date);
        if (trainIndex !== -1) {
            trainsArr[trainIndex].distance = Number(trainsArr[trainIndex].distance) + Number(form.distance);
        } else {
            setTrains(prev => [...prev, {id: nanoid(), date: form.date, distance: form.distance}]);
        }
        setForm({date: '', distance: ''});
    };

    const handleDelete = (id) => {
        const item = trainsArr.find((el) => el.id === id);
        return () => {setTrains(prev => trainsArr.splice(trainsArr.indexOf(item), 1));}
    };

    return(
        <div className='TrainsContainer'>
            <TrainForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
            <TrainsInfo trainsArr={trainsArr} onDelete={handleDelete} />
        </div>
    );
}