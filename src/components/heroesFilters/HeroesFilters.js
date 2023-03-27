// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterHeroes } from '../../actions';

const HeroesFilters = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();

    const setClassName = (element) => {
        switch (element) {
            case 'fire':
                return 'btn btn-danger';
            case 'water':
                return 'btn btn-primary';
            case 'wind':
                return 'btn btn-success';
            case 'earth':
                return 'btn btn-secondary';
            default:
                return 'btn btn-outline-dark active';
        }
    }

    const renderFilters = filters.map((element, i) => {
        return (
            <button className={setClassName(element)} key={i} onClick={() => dispatch(filterHeroes(element))}>
                {element[0].toUpperCase() + element.slice(1)}
            </button>
        )
    });

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter heroes by element</p>
                <div className="btn-group">
                    {renderFilters}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;