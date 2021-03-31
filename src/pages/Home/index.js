import React from 'react';

const Page = ({ history }) => {
  return <div>
    home
    <button onClick={() => {
      history.push("/product");
    }}>product</button>
  </div>;
};

export default Page;