import React, { useEffect, useState } from "react";
import style from "./index.module.scss"
import Menu from "components/Menu";
import ICard from "types/ICard";
import Content from "components/Content";
import IMenuItem from "types/Menu/IMenuItem";

const selectAllTags = "Все темы";

const Layout = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>(selectAllTags)
    const [selectedCards, setSelectedCards] = useState<ICard[]>([]);
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

    useEffect(() => {
        fetch('https://logiclike.com/docs/courses.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCards(data ?? []);
                setSelectedCards(data ?? []);
                setMenuItems(createMenuItems(data ?? []))
            });
    }, []);

    useEffect(() => {
        setSelectedCards(cards.filter(card => selectedMenuItem === selectAllTags
            || card.tags.indexOf(selectedMenuItem) >= 0))
    }, [selectedMenuItem]);

    const createMenuItems = (cards: ICard[]): IMenuItem[] => {
        const flatTags = cards.map(c => c.tags).flat()
        const tags = flatTags.filter((value, i) => flatTags.indexOf(value) === i);

        const menuItems = tags.map((tag) => {
            return {
                text: tag,
                onClick: () => { setSelectedMenuItem(tag) }
            } as IMenuItem
        });

        return [createDefaultMenuItem(), ...menuItems];
    }

    const createDefaultMenuItem = () => {
        return {
            text: selectAllTags,
            onClick: () => { setSelectedMenuItem(selectAllTags); }
        } as IMenuItem
    }

    return (
        <div className={style.layout}>
            <nav className={style.menuwrapper}>
                <Menu items={menuItems ?? []} selected={selectedMenuItem} />
            </nav>
            <section className={style.contentwrapper}>
                <Content cards={selectedCards ?? []} />
            </section>
        </div>
    );
}

export default Layout;