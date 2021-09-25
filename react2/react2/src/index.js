import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./AprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="sam"
        timeAgo="today at 9:35"
        text="nice job"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="alex"
        timeAgo="yesterday at 2:25"
        text="nice work"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="jane"
        timeAgo="month ago at 10:40"
        text="nice comments"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
