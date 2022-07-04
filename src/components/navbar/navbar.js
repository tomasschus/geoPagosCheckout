import './navbar.css'

import logo from '../../logo.svg'
import logoBlue from '../../logo-blue.svg'

export default function Navbar(props) {

    const {shop_name, checkoutError} = props

    return (

    <nav className={checkoutError?"navbar navbarError":" navbar "}>
    <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/#">
            <img src={checkoutError? logoBlue: logo} className="logo mx-2" alt="" width="30" height="24"></img>
        </a>
        <p className={checkoutError?"shop shopError mx-2":"shop mx-2"}>{shop_name}</p>
    </div>
    </nav>
    )
}