import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: "250px", borderRadius: "20px" }}>
    <h2>{product.title}</h2>
    <img src={product.images} alt={product.title} style={{ width: '200px', height: "300px" }} />
    <p>{product.brand}</p>
    <p>{product.price}</p>
    <p>{product.discount}</p>
    <p>{product.description}</p>
    <p>{product.category}</p>
    <button>Подробнее</button>
  </div>
);

const Render = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    brand: '',
    image: '',
    price: '',
    discount: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products.slice(0, 5));
      });
  }, []);

  const handleInputChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, newProduct]);
    fetch('https://dummyjson.com/docs/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        setModalIsOpen(false);
      });
  };

  const handleSortAsc = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const handleSortDesc = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Добавить продукт</button>
      <button onClick={handleSortAsc}>↑</button>
      <button onClick={handleSortDesc}>↓</button>
      <div className='main'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <input name="title" onChange={handleInputChange} placeholder="Title" />
          <input name="brand" onChange={handleInputChange} placeholder="Brand" />
          <input name="image" onChange={handleInputChange} placeholder="Image" />
          <input name="price" onChange={handleInputChange} placeholder="Price" />
          <input name="discount" onChange={handleInputChange} placeholder="Discount" />
          <input name="description" onChange={handleInputChange} placeholder="Description" />
          <input name="category" onChange={handleInputChange} placeholder="Category" />
          <button type="submit">Добавить</button>
        </form>
      </Modal>
    </div>
  );
};

export default function MainPage() {
  return <Render />;
};
