import React, { useState } from 'react';
import usePrevious from './usePrevious';

const Page = ({ history }) => {
  const [value, setValue] = useState("");
  const prevValue = usePrevious(value);

  return <div>
    current: {value}<br />
    prev: {prevValue}<br />
    <input type='text' value={value} onChange={evt => setValue(evt.target.value)} />
  </div>;
};

export default Page;