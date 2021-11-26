import React, { FC, SyntheticEvent, useState } from "react";
import "./Item.css";

interface ItemProps {
  title: string;
  handleDelete: Function;
  handleOnClickOnAccept: any;
  idItem: number;
}

const Item: FC<ItemProps> = ({ title, handleDelete, idItem, handleOnClickOnAccept }) => {
  const [isEditable, setEditable] = useState(false);
  const [titleState, setTitle] = useState(title);


  const handleOnChange = (event: any) => {
    setTitle(event.currentTarget.value)
  }

  const handleButtonDelete = (event: SyntheticEvent) => {
    const id = event?.currentTarget.id.split("btn_")[1];
    handleDelete(parseInt(id));
  };


  const conditionalRender = () => {
    if (isEditable) {
      return (
        <div className="item_container">
          <div className="item_title">
            <input type="text" onChange={handleOnChange} value={titleState} name={"editableItem_" + idItem} />
          </div>
          <div >
            <button
              type="button"
              id={"btn_" + idItem}
              className="item_btn.accept"
              onClick={() => setEditable(false)}
            >
              Accept
            </button>
            <button
              type="button"
              id={"item_btn.cancel" + idItem}
              className="item_btn_cancel"
              onClick={handleButtonDelete}
            >
              Calcel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="item_container">
        <div className="item_title">{titleState}</div>
        <div className="item_btns">
          <div className="item_btn_container">
            <button type="button" onClick={() => setEditable(true)} className="item_btn_edit">
              Edit
            </button>
          </div>
          <div className="item_btn_container">
            <button
              type="button"
              id={"item_btn_" + idItem}
              className="item_btn_delete"
              onClick={handleButtonDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <>{conditionalRender()}</>
};

export default Item;
