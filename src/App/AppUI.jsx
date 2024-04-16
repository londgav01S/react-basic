import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import React from 'react';
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {EmptyTodos} from "../EmptyTodos/EmptyTodos";
import {TodosError} from "../TodosError/TodosError";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodoContext} from "../TodoContext/TodoContext";
import {Modal} from "../Modal/Modal";
import {TodoForm} from "../TodoForm/TodoForm";


function AppUI(){
    const {
        error,
        loading,
        serchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError/>}
                {(!loading && !serchedTodos.length) && <EmptyTodos/>}
                {serchedTodos.map(todo =>
                    (<TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    );
}

export {AppUI}