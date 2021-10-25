import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import REQUEST_STATUS from "../../helpers/constants";
import { getTshirtDetail } from "../../redux/actions/tshirtDetailAction";
import "./TshirtDetail.scss";

function TshirtDetail() {
  const { id } = useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getTshirtDetail(id));
  },[])
  const tshirtDetails = useSelector((state) => state.tshirtDetail);
  console.log(tshirtDetails.data);

  return (
    <div className="tshirt-detail-wrapper">
      {
        <>
          {tshirtDetails.status === REQUEST_STATUS.PENDING && (
            <div>Loading...</div>
          )}
          {tshirtDetails.status === REQUEST_STATUS.SUCCESS && (
            <div className="tshirt-detail" key={tshirtDetails.data.id}>
              <div className="tshirt-detail-image">
                <img
                  src={tshirtDetails.data.imageUrl}
                  alt={tshirtDetails.data.title}
                />
              </div>
              <div className="tshirt-detail-info">
                <div className="tshirt-detail-title">
                  {tshirtDetails.data.title}
                </div>
                <div className="tshirt-detail-desc">
                  {tshirtDetails.data.description}
                </div>
                <div className="tshirt-detail-color">
                  {tshirtDetails.data.color}
                </div>
                <div className="tshirt-detail-price">
                  {tshirtDetails.data.price}
                </div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
}

export default TshirtDetail;
