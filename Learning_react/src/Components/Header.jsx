import style from './Header.module.css';
export const Header = () => {
    return (
        <header>
        <h1 className={style.header}>React Counter App</h1>
        <p>Learn React by building a simple counter application.</p>
        </header>
    );
    }