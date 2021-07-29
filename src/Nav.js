import './Nav.css';

function Nav({clickHandler}) {
    return (
        <section>
            <button onClick={()=>{clickHandler("all")}}>All</button>
            <button onClick={()=>{clickHandler("breakfast")}}>Breakfast</button>
            <button onClick={()=>{clickHandler("lunch")}}>Lunch</button>
            <button onClick={()=>{clickHandler("shakes")}}>Shakes</button>
        </section>
    )
}

export default Nav;