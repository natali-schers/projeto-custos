import { Link } from 'react-router-dom'
import Container from './Container'
import style from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar()
{
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Custos" />
                </Link>
                <ul className={StyleSheet.list}>
                    <li className={style.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
