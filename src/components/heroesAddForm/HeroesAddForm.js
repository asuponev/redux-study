// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import store from '../../store';
import { useCreateHeroMutation } from '../../api/apiSlice';
import { selectAll } from '../heroesFilters/filtersSlice';

const HeroesAddForm = () => {
    const { filtersLoadingStatus } = useSelector(state => state.filters);
    const filters = selectAll(store.getState());

    const [createHero] = useCreateHeroMutation();

    const [values, setValues] = useState({
        id: '',
        name: '',
        description: '',
        element: ''
    });

    const handleChange = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Loading elements</option>
        } else if (status === "error") {
            return <option>Loading error</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({ name, label }) => {
                // eslint-disable-next-line
                if (name === 'all') return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        values.id = uuidv4();

        createHero(values).unwrap();

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
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;