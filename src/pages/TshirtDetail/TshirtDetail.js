import React from "react";
import { useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import "./TshirtDetail.scss";

function TshirtDetail() {
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
            <div key={tshirtDetails.data.id}>
              <div className="tshirt-detail-image">
                <img
                  src={tshirtDetails.data.imageUrl}
                  alt={tshirtDetails.data.title}
                />
              </div>
              <div className="tshirt-detail-info">
                <div>{tshirtDetails.data.title}</div>
                <div>{tshirtDetails.data.description}</div>
                <div>{tshirtDetails.data.color}</div>
                <div>{tshirtDetails.data.price}</div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
}

export default TshirtDetail;
