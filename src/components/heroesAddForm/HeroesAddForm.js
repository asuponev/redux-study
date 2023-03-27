// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useHttp } from '../../hooks/http.hook';
import { createHeroSuccess, createHeroError, filtersFetched, filtersFetchingError } from '../../actions';

const HeroesAddForm = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    const [values, setValues] = useState({
        id: '',
        name: '',
        description: '',
        element: ''
    });

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
        // eslint-disable-next-line
    }, [])

    const handleChange = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const selectOptions = filters.slice(1).map((filter, i) => {
        return (
            <option value={filter} key={i}>
                {filter[0].toUpperCase() + filter.slice(1)}
            </option>
        )
    });

    const formSubmit = (event) => {
        event.preventDefault();
        values.id = uuidv4();
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(values))
            .then(data => dispatch(createHeroSuccess(data)))
            .catch(() => dispatch(createHeroError()))
        setValues({
            id: '',
            name: '',
            description: '',
            element: ''
        })
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={formSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name of new hero</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="What is the hero's name?"
                    value={values.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label fs-4">Description</label>
                <textarea
                    required
                    name="description"
                    className="form-control"
                    id="description"
                    placeholder="What is the hero's skill?"
                    style={{ "height": '130px' }}
                    value={values.description}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Select a hero element</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={values.element}
                    onChange={handleChange}
                >
                    <option value="">Select a hero element</option>
                    {selectOptions}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;