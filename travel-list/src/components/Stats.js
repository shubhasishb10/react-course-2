export default function Stats({ items }) {
  //console.log(items.length)
  const totalItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      {!!totalItem ? (
        <em>
          {totalItem === packedItem ? (
            <>✅ Packing comple, lets gooooo ✈️ </>
          ) : (
            `Your have ${totalItem} on
          your list, and you already packed ${packedItem} (
          ${Math.round((packedItem / totalItem) * 100)}%)`
          )}
        </em>
      ) : (
        <em>Lets add items to get started</em>
      )}
    </footer>
  );
}
