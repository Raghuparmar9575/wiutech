import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Table",
    price: 19,
    quantity: 10,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pHNY7h6Ec8-QZFHGjjDlXuaTulLbhpSQzw&s",
    description: "Table",
  },
  {
    id: 2,
    name: "Laptop",
    price: 240,
    quantity: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJT3lHArTqEq-RvaZKopsF_Z6we8rVdYoXw&s",
    description: "new laptop",
  },
  {
    id: 3,
    name: "Smart TV",
    price: 140.99,
    quantity: 15,
    imageUrl:
      "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/LED_TV_1695123123749_1695123147285.JPG",
    description: "Smart Tv",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    imageUrl: "",
    description: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [viewedProduct, setViewedProduct] = useState(null);

  const handleEdit = (productId) => {
    console.log(`Editing product with ID ${productId}`);
    setEditProductId(productId);
    const productToEdit = products.find((product) => product.id === productId);
    setNewProduct(productToEdit);
    setShowAddForm(true);
  };

  const handleDelete = (productId) => {
    console.log(`Deleting product with ID ${productId}`);
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const parsedPrice = parseFloat(newProduct.price);

    if (!isNaN(parsedPrice)) {
      const newProductWithPrice = {
        ...newProduct,
        price: parsedPrice,
        id: editProductId || Date.now(),
      };

      if (editProductId) {
        const editedProductIndex = products.findIndex(
          (product) => product.id === editProductId
        );
        const updatedProducts = [...products];
        updatedProducts[editedProductIndex] = newProductWithPrice;
        setProducts(updatedProducts);
        setEditProductId(null);
      } else {
        setProducts([...products, newProductWithPrice]);
      }

      setNewProduct({
        name: "",
        price: "",
        quantity: "",
        imageUrl: "",
        description: "",
      });

      setShowAddForm(false);
    } else {
      alert("Please enter a valid price.");
    }
  };

  const handleView = (productId) => {
    const product = products.find((product) => product.id === productId);
    setViewedProduct(product);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/");
    }
  };
  return (
    <div className="m-5">
      <Row>
        <Col>
          <Button variant="info mb-4" onClick={() => navigate("/profile")}>
            Profile
          </Button>
        </Col>
        <Col>
          <Button variant="danger mb-4" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <button
        className="btn btn-success mb-2"
        onClick={() => setShowAddForm(true)}
      >
        Add Product
      </button>
      {showAddForm && (
        <div className="ml-5">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                quantity: parseInt(e.target.value),
              })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={(e) =>
              setNewProduct({ ...newProduct, imageUrl: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />

          <Row>
            <Col>
              {" "}
              <button
                className="btn btn-primary mt-3"
                onClick={handleAddProduct}
              >
                {editProductId ? "Update" : "Add"}
              </button>
            </Col>
            <Col>
              <button
                className="btn btn-danger mt-3 ml-2"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </Col>
          </Row>
        </div>
      )}
      {viewedProduct && (
        <div className="card row justify-content-center" id="view-card">
          <img src={viewedProduct.imageUrl} alt={viewedProduct.name} />
          <div>
            <h5>{viewedProduct.name}</h5>
            <p>Price: ${viewedProduct.price.toFixed(2)}</p>
            <p>Quantity: {viewedProduct.quantity}</p>
            <p>Description: {viewedProduct.description}</p>
          </div>
          <button onClick={() => setViewedProduct(null)}>Close</button>
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.imageUrl} alt={product.name} width="50" />
              </td>
              <td>{product.name}</td>
              <td>
                {typeof product.price === "number"
                  ? `$${product.price.toFixed(2)}`
                  : "Invalid Price"}
              </td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>
                <Row>
                  <Col>
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      Edit
                    </button>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleView(product.id)}
                    >
                      View
                    </button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
