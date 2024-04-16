import './TodoItem.css';
import cancel from './img_1.png';

const logoCancel = cancel;

function TodoItem(props){
    return(
        <li>
            <span
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
            </span>
            <p className={`txt ${props.completed && "txt-active"}`}>{props.text}</p>
            <span
                className={`delete`}
                onClick={props.onDelete}
            >
                <img src={logoCancel} alt=""/></span>
        </li>
    )
}

export {TodoItem}