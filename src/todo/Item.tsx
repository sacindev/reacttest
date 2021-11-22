import React, { useState } from "react";
import './Item.css'

interface ItemProps{
  title: String
}

const Item = ({title}:ItemProps): JSX.Element => {
  return (
    <div className="item_container">
      <div className="item_title">{title}</div>
      <div className="item_btns">
        <div className="item_btn_container">
          <button type="button" className="item_btn_edit">Edit</button>
        </div>
        <div className="item_btn_container">
          <button type="button" className="item_btn_delete">Delete</button>
        </div>
      </div>
    </div>
  );
};



export default Item