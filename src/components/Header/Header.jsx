import { Link } from 'react-router-dom'
import './Header.css'
export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <Link to={'/'} className="header__logo">
                        <div className="header__logo">
                            <img src="/img/logo.svg" alt="logo" />
                            <span className="logo__text">Abito</span>
                        </div>
                    </Link>
                    <div className="header__controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className="header__burger">
                        <img src="/img/burger.svg" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}