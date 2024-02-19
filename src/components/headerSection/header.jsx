import styles from './header.module.scss'
import NuKenzieLogo from '../../assets/NuKenzieLogo.svg'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>

            <img src={NuKenzieLogo} alt="Logo NuKenzie" />
        </div>

    )
}