import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useHttp } from '../../hooks/http.hook';
import { heroesFetching, heroesFetched, heroesFetchingError } from '../../actions';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

import './heroesList.scss';

const HeroesList = () => {
    const { heroes, heroesLoadingStatus, currentFilter } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
        // eslint-disable-next-line
    }, [currentFilter]);

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Loading error</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">No heroes yet</h5>
        }

        return arr.map(hero => {
            return (
                <CSSTransition
                    key={hero.id}
                    timeout={500}
                    classNames="hero">
                    <HeroesListItem {...hero} />
                </CSSTransition>
            )
        })
    }

    const filterHeroes = currentFilter === 'all' ? heroes : heroes.filter(hero => hero.element === currentFilter)

    const elements = renderHeroesList(filterHeroes);
    return (
        <TransitionGroup component="ul">
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;