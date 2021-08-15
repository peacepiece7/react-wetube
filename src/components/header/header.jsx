import React, { useRef } from "react";
import styles from "./header.module.css"
import mainLogo from "../../images/pepe.jpeg"


const Header = props => {
    const searchRef = useRef()

    const handleSubmit = event => {
        event.preventDefault()
        if(searchRef.current.value === "") {
            return alert("한 단어 이상 입력해주세요")
        }
        props.onSearchValue(searchRef.current.value)
        searchRef.current.value = ""
    }

    const handleLogoClick = () => {
        window.location.reload()
    }
    return <div className={styles.header}>
        <div className={styles.inner}>
            <div onClick={handleLogoClick} className={styles.logo}>
                <img src={mainLogo} alt="main logo"/>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input ref={searchRef} type="text" placeholder="SEARCHING BY..."/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    </div>
}

export default Header