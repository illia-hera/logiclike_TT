import React from "react";
import style from "./index.module.scss"
import IMenuItem from "types/Menu/IMenuItem";
import classnames from "classnames";

const Item = ({ text, selected, onClick }: IMenuItem) => {
    return (
        <div className={classnames({ [style.menuitem]: true, [style.selected]: selected })} onClick={onClick}>
            {text}
        </div>
    );
}

export default Item;