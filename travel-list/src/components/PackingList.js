import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onItemRemove,
  onItemPacked,
  onResetList,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleSortChange($event) {
    setSortBy($event.target.value);
  }

  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onItemRemove={onItemRemove}
            onItemPacked={onItemPacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSortChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button style={{ backgroundColor: "#ff3333" }} onClick={onResetList}>
          Clear list
        </button>
      </div>
    </div>
  );
}
