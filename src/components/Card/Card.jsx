import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, address, date, img }) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card__img">
                <img src={`${img}`} alt="product" />
            </div>
            <h5 className="card__title">
                {title}
            </h5>
            <strong className="card__price">
                {price}
            </strong>
            <div className="card__desc">
                <div className="card__local">
                    {address}
                </div>
                <span className="card__time">
                    {date}
                </span>
            </div>
        </Link>
    )
}
