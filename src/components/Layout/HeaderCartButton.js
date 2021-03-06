import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton =(props)=>
{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span > Cart </span>
        <span className={classes.badge}> d3 </span>
    </button>
}

export default HeaderCartButton;