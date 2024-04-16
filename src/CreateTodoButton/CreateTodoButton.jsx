import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    return (
        <button className="agregarTodo"
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }>
        </button>
    );
}

export { CreateTodoButton };