export default interface IMenuItem {
    selected?: boolean,
    text: string,
    onClick: React.MouseEventHandler,
}