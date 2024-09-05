import { useOutletContext, useParams } from "react-router-dom";



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
                                    <div className="side__list-item">
                                        <img className="side-list-item__img" src="/img/delivery.svg" alt="delivery" />

                                        <h5 className="list-item__title">Доставка</h5>
                                        <p className="list-item__text">Проверка при получении и возможность бесплатно вернуть
                                            товар</p>
                                    </div>
                                    <div className="side__list-item">
                                        <img src="/img/car.svg" alt="delivery" className="side-list-item__img" />
                                        <h5 className="list-item__title">Автотека</h5>
                                        <p className="list-item__text">Отчёт с историей авто: пробег, владельцы, сведения о
                                            залоге, ДТП и ремонтах</p>
                                    </div>
                                    <div className="side__list-item">
                                        <img src="/img/love.svg" alt="delivery" className="side-list-item__img" />
                                        <h5 className="list-item__title">Онлайн-бронирование жилья</h5>
                                        <p className="list-item__text">Посуточная аренда квартир и домов: большой выбор
                                            вариантов для поездок по России</p>
                                    </div>
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