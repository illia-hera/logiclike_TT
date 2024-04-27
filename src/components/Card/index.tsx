import React from "react";
import style from "./index.module.scss"
import ICard from "types/ICard";

const Card = ({ id, image, name, bgColor }: ICard) => {
    const imageStyle = {
        backgroundColor: bgColor
    };

    return (
        <div key={id} className={style.card}>
            <div className={style.image} style={imageStyle}>
                <img src={image} />
            </div>
            <div className={style.title}>{name}</div>
        </div>
    );
}

export default Card;