import React, { FC, SyntheticEvent, useState } from "react";
import "./Item.css";

interface ItemProps {
  title: string;
  handleDelete: Function;
  handleOnClickOnAccept: any;
  idItem: number;
}

const Item: FC<ItemProps> = ({
  title,
  handleDelete,
  idItem,
  handleOnClickOnAccept,
}) => {
  const [isEditable, setEditable] = useState(false);
  const [titleState, setTitle] = useState(title);

  const handleOnChange = (event: any) => {
    setTitle(event.currentTarget.value);
  };

  const handleButtonDelete = (event: SyntheticEvent) => {
    const id = event?.currentTarget.id.split("btn_")[1];
    handleDelete(parseInt(id));
  };

  const handleButtonAccept = (event: SyntheticEvent) => {
    setEditable(false);
  };
  const handleButtonEdit = (event: SyntheticEvent) => {
    setEditable(true);
    const idItem = event.currentTarget.id.split('item_btn_')[1];
    const elem = document.getElementById("#inputId_" + idItem);
    console.log(elem, idItem);
    
    elem?.focus()
  };

  const conditionalRender = () => {
    if (isEditable) {
      return (
        <div className="item_container">
          <div className="item_title">
            <input
              type="text"
              onChange={handleOnChange}
              value={titleState}
              name={"editableItem_" + idItem}
              id={"inputId_" + idItem}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleButtonAccept}
              className="item_btn.accept"
              id={"item_btn_accept_" + idItem}
            >
              Accept
            </button>
            <button
              type="button"
              onClick={handleButtonDelete}
              className="item_btn_cancel"
              id={"item_btn_cancel_" + idItem}
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
            <button
              type="button"
              onClick={handleButtonEdit}
              className="item_btn_edit"
              id={"item_btn_edit" + idItem}
            >
              Edit
            </button>
          </div>
          <div className="item_btn_container">
            <button
              type="button"
              onClick={handleButtonDelete}
              className="item_btn_delete"
              id={"item_btn_delete_" + idItem}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <>{conditionalRender()}</>;
};

export default Item;
