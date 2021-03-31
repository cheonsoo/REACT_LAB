import React, { useState, useEffect } from 'react';

const SIZE = 10;

const getItems = () => {
  let arr = [];
  for (let i=0; i<SIZE; i++) {
    let uniq = parseInt(Math.random() * 100000)
    arr.push({ id: uniq, name: `name_${uniq}` });
  }
  return arr;
};

const useWindowEvent = (event, callback) => {
  window.addEventListener(event, callback);
};

let timeout;

const InfiniteScroll = () => {
  const [items, setItems] = useState(getItems());

  useWindowEvent('scroll', function(event) {

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const scrollPoz = window.pageYOffset + window.innerHeight;
      const contentHeight = document.querySelector('.dataGrid').clientHeight;
      console.log(scrollPoz);
      console.log(contentHeight);

      if (scrollPoz >= contentHeight) {
        console.log("reached the bottom of the page. getting new data.");
        setItems(items.concat(getItems()));
      }
    }, 1000);
  });

  useEffect(() => {
    console.log(items);
  }, [items]);

  return <div>
    <div>
      <div className='dataGrid' style={{ height: '100%' }}>
        <ul style={{ listStyle: 'none' }}>
          {items.map(item => (
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '500px', height: '100px', border: '1px solid #e9e9e9', borderRadius: '4px', margin: '10px' }} key={item.id}>{item.id} ::: {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
};

export default InfiniteScroll;