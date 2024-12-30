import React from "react";
import styles from "./NavbarStyles.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default Navbar;