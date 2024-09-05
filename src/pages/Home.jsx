import { Card } from "../components/Card/Card"
// import { cardArray } from "../constants"
import { SidebarList } from "../components/Sidebar/SidebarList"
import { sidebarArray } from "../constants"
import { useOutletContext } from "react-router-dom"

export const Home = () => {
    const { products } = useOutletContext()
    return (
        <section className="content">
            <div className="container">
                <div className="content__box">
                    <div className="content__main">
                        <h2 className="content-main__title">Рекомендации для вас</h2>

                        <div className="content-main__list">
                            {
                                products.map(card => (
                                    <Card
                                        key={card.id}
                                        id={card.id}

                                        title={card.title}
                                        price={card.price}
                                        address={card.address}
                                        date={card.date}
                                        img={card.img}
                                    />
                                ))
                            }
                        </div>

                    </div>

                    <div className="content__side">
                        <h3 className="side__title">
                            Сервисы и услуги
                        </h3>
                        <div className="side__box">
                            <div className="side__list">
                                {
                                    sidebarArray.map(item => (
                                        <SidebarList
                                            key={item.id}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text}
                                        />
                                    ))
                                }
                            </div>

                            <div className="content-side__footer">
                                <p className="content-side__footer--item">
                                    © ООО «Абито», 2011–2021
                                </p>
                                <a href="#!" className="content-side__footer--item">
                                    Политика конфиденциальности
                                </a>
                                <a href="#!" className="content-side__footer--item">
                                    Обработка данных
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}