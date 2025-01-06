import { useState } from "react";

export default function Form({ onItemAdd }) {
  // const itemName = useRef();
  // const itemNumber = useRef();
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit($event) {
    $event.preventDefault();
    if (description.trim() === "") return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    onItemAdd(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={($event) => setQuantity(Number($event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={($event) => setDescription($event.target.value)}
        placeholder="Item..."
        value={description}
      />
      <button>Add</button>
    </form>
  );
}
