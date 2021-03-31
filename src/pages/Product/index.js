import React from 'react';

const Page = ({ history }) => {
  return <div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>
    <div><input type="text" /></div>

    <button onClick={() => {
      history.push("/");
    }}>home</button>
  </div>;
};

export default Page;