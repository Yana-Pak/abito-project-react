import './SidebarList.css'

export const SidebarList = ({ img, title, text }) => {
    return (
        <div className="side-list__item">
            <img className="list-item__img" src={img} alt="delivery" />
            <h5 className="list-item__title">{title}</h5>
            <p className="list-item__text">{text}</p>
        </div>
    )
}