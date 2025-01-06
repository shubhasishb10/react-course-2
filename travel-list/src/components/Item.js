export default function Item({ item, onItemRemove, onItemPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onItemPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onItemRemove(item.id)}>❌</button>
    </li>
  );
}
