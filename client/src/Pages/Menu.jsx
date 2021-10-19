import React, {useState} from 'react'
import MenuCollection from '../Component/Restaurant/MenuCollection';

function Menu() {

    
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/menus/499/65499/cef7fb189e48df1a7397b7d075918adf.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/d20b5bbe36ae37e940ae5ee07201e03b.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/0aa68e49b1523c94e610fb9aeda32fde.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/0e147aeb6b49cf6f2b639472a6161e27.jpg",
  ]);
    return (
        <>
            <div className='flex flex-wrap gap-3' >
                <MenuCollection menuTitle='Menu' pages={menus.length}  image={menus} />
            </div>
            <div className='my-20' ></div>
        </>
    )
}

export default Menu
