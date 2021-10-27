import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.scss";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { getCart } from "../../redux/actions/cartAction";

function Header() {
  const { totalPrice,setTotalPrice } = useCart();
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCart());
  },[])
  const cart=useSelector(state=>state.cart)
  useEffect(() => {
    if (cart.status === REQUEST_STATUS.SUCCESS) {
      setTotalPrice(0);
      cart.data.map((item) => {
        setTotalPrice((prev) => prev + Number(item.price));
      });
    }
  }, [cart]);
  
  console.log(cart);
  
  const history = useHistory();
  return (
    <header>
      <nav>
        <p
          onClick={() => {
            history.push("/");
          }}
          className="header-title"
        >
          E-Ticaret Sitesi
        </p>
        <div className="menu">
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/hats">Hat</Link>
          <Link to="/cart">Cart: {totalPrice} $</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
