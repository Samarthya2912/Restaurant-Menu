import './Menu-item.css';

function MenuItem({ id, title, category, price, img, desc }) {
    return (
        <div className="menu-item">
            <img src={img} alt="" />
            <div className="right">
                <div className="title">
                    <span className="name">{title}</span>
                    <span className="price">${price}</span>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default MenuItem;