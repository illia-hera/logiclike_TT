import React from "react";
import style from "./index.module.scss"
import ICard from "types/ICard";
import Card from "components/Card";

interface IProps {
    cards: ICard[]
}

const Content = ({ cards }: IProps) => {
    const renderCards = () => {
        return cards.map((c, n) => <Card key={n} {...c} />)
    }

    return (
        <div className={style.content}>
            {renderCards()}
        </div>
    );
}

export default Content;