import React from "react";
import { useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import "./HatDetail.scss";

function HatDetail() {
  const hatDetails = useSelector((state) => state.hatDetail);
  console.log(hatDetails);
  return (
    <div className="tshirt-detail-wrapper">
      {
        <>
          {hatDetails.status === REQUEST_STATUS.PENDING && (
            <div>Loading...</div>
          )}
          {hatDetails.status === REQUEST_STATUS.SUCCESS && (
            <div key={hatDetails.data.id}>
              <div className="tshirt-detail-image">
                <img
                  src={hatDetails.data.imageUrl}
                  alt={hatDetails.data.title}
                />
              </div>
              <div className="tshirt-detail-info">
                <div>{hatDetails.data.title}</div>
                <div>{hatDetails.data.description}</div>
                <div>{hatDetails.data.color}</div>
                <div>{hatDetails.data.price}</div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
}

export default HatDetail;
