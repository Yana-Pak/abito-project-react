import { useOutletContext, useParams } from "react-router-dom";
import { SidebarList } from "../components/Sidebar/SidebarList"
import { sidebarArray } from "../constants"


export const Product = () => {
    const { products } = useOutletContext()

    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)

    return (
        <section className="content">
            <div className="container">
                {findProduct ?
                    <div className="content__box">
                        <div className="content__product">
                            <div className="content-product__left">
                                <h2 className="content-product__title">{findProduct.title}</h2>
                                <img className="content-product__img" src={findProduct.img} alt="kugoo" />
                                <p className="content-product__text">
                                    {findProduct.description}
                                </p>
                            </div>
                            <div className="content-product__rigth">
                                <h2 className="content-product__price">{findProduct.price}</h2>
                                <button className="btn btn-primary btn-large"> Показать телефон</button>
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
                    :
                    <h2>Такого товара не существует!</h2>
                }

            </div>
        </section>
    )
}