import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./AprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          <p>Are you sure you want to do this ? </p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="today at 9:35"
          text="nice job"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="yesterday at 2:25"
          text="nice work"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="jane"
          timeAgo="month ago at 10:40"
          text="nice comments"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
