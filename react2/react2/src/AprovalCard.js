import React from "react";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Are U sure ?</div>
      <div className="extra content">
        <div className="ui two button">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
