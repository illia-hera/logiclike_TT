import React from "react";
import style from "./index.module.scss"
import Item from "./Item";
import IMenuItem from "assets/types/Menu/IMenuItem";

interface IProps {
    items: IMenuItem[],
    selected: string,
}

const Menu = ({ items, selected }: IProps) => {
    const renderItems = () => {
        return items.map((i) => 
            <Item key={i.text} {...i} selected={selected === i.text} />)
    }

    return (
        <div className={style.menu}>
            {renderItems()}
        </div>
    );
}

export default Menu;