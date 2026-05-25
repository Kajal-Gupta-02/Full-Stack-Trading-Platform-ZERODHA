import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { orders } from "../data/data";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:4000/allOrders");
        setAllOrders(res.data.length>0? res.data:orders);
        setError(null);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please check if the backend is running.");
        setAllOrders(orders);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

  if (loading) {
    return <h3 className="title">Loading Orders...</h3>;
  }

  if (error) {
    return <h3 className="title" style={{ color: "red" }}>{error}</h3>;
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>
          <tbody>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price.toFixed(2)}</td>
              <td>{order.mode}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;