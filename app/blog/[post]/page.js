import React from "react";

const Page = ({ params }) => {
  return (
    <div>
      <h1>Post : {params.post}</h1>
    </div>
  );
};

export default Page;
