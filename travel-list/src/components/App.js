import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((old) => [...old, item]);
  }

  function handleRemoveItem(id) {
    setItems([...items.filter((item) => item.id !== id)]);
  }

  function handlePackedItem(id) {
    setItems((old) =>
      old.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleResetList() {
    const confirmed = window.confirm("Are you sure to clear this list?");
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onItemAdd={handleAddItem} />
      <PackingList
        onItemRemove={handleRemoveItem}
        items={items}
        onItemPacked={handlePackedItem}
        onResetList={handleResetList}
      />
      <Stats items={items} />
    </div>
  );
}
