import React from "react";

const ReactStateTutorial = () => {
  const [items, setItems] = React.useState(["ArrItem1", "ArrItem2"]);

  function addItem() {
    const newItemText = `ArrItem${items.length + 1}`;
    // tempArray.push(newItemText);
    setItems((prevState) => [...prevState, newItemText]);
    console.log(newItemText);
  }

  const newItemsElement = items.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {newItemsElement}
    </div>
  );
};

export default ReactStateTutorial;
