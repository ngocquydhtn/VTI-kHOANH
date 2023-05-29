import { useState, useMemo } from "react";

function HookUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleAdd = () => {
    const product = {
      name: name,
      price: price,
    };
    setProducts([...products, product]);
  };
  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log(11111);
      return total + +product.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div style={{ padding: "20px 30px" }}>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="input Name"
      />
      <br />
      <input
        type="number"
        id="price"
        name="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="input price"
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <h3> Total: {total}</h3>
      <h4>List Product</h4>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HookUseMemo;
