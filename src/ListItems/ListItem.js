import React from "react";
import "./ListItem.css";
import Flipmove from "react-flip-move";

const ListItem = (props) => {
  const items = props.items;
  const listItems = items.map((item, index) => {
    return (
      <div className='list' key={item.key}>
        <p className='bold'>
          <input
            type='text'
            id={item.key}
            value={item.text}
            onChange={(e) => props.setUpdate(e.target.value, item.key)}
          />
          <span>
            <button
              className='fa fa-trash faicons'
              onClick={() => props.deleteItem(index)}
            ></button>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div className='card'>
      <div className='card-header text-center bg-success'>
        <h5 className='bold'>LIST ITEMS</h5>
      </div>
      <div className='card-body bg-primary'>
        <Flipmove duration={600} easing='ease-in-out'>
          {listItems}
        </Flipmove>
      </div>
    </div>
  );
};

export default ListItem;
