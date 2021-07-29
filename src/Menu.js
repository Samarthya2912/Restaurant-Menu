/* eslint-disable no-unused-vars */
import MenuItem from './Menu-item';
import './Menu.css';
// import data from './data';

function Menu({data}){
    const items = data.map(item=>{
        return <MenuItem {...item}/>
    })

    return (
        <div className="menu">
            {items}
        </div>
    )
}

export default Menu;