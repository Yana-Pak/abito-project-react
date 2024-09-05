import './Error.css'
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError();

    return (
        <div className='error'>
            <img src="img/error404.jpg" className="error__img" alt="error404" />
            <Link to={'/'} >
                <button className='error__btn'>Вернуться</button>
            </Link>
        </div>
    )
}


