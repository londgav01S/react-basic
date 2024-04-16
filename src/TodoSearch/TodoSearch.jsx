import './TodoSearch.css';
import React from 'react';
import {TodoContext} from "../TodoContext/TodoContext";

const list = [
    'cortar cebolla',
    'tomar el curso de intro a React',
    'llorar con la llorona',
    'hacer ejercicio',
    'escuchar música'
];
const randomIndex = Math.floor(Math.random() * list.length);

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);
    return (
        <input className="TodoSearch" type="text"
               placeholder={list[randomIndex]}
               value={searchValue}
               onChange={(event) =>{
                     setSearchValue(event.target.value);
               }}
        />
    );
}

export { TodoSearch };