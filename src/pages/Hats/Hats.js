import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { getHats } from "../../redux/actions/hatAction";
import { getHatDetail } from "../../redux/actions/hatDetailAction";
import REQUEST_STATUS from "../../helpers/constants";
import "../Tshirts/Tshirts.scss";
import useTheme from "../../hooks/useTheme";

function Hats() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {theme}=useTheme();
  useEffect(() => {
    dispatch(getHats());
  }, [dispatch]);
  const hats = useSelector((state) => state.hats);
  return (
    <>
      <Header />
      {hats.status === REQUEST_STATUS.PENDING && <div>Loading...</div>}
      {hats.status === REQUEST_STATUS.SUCCESS && (
        <div className={`product-container ${theme==="light"?"product-container-light":"product-container-dark"}`}>
          {hats.data.map((hat) => (
            <div
            className={`product-card ${theme==="light"?"product-card-light":"product-card-dark"}`}
              onClick={() => {
                dispatch(getHatDetail(hat.id));
                history.push("hat-details/" + hat.id);
              }}
              key={hat.id}
            >
              <div className="image">
                <img src={hat.imageUrl} alt={hat.title} />
              </div>
              <div className={`product-info ${theme==="light"?"product-info-light":"product-info-dark"}`}>
                <div>{hat.title}</div>
                <div>{hat.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Hats;
