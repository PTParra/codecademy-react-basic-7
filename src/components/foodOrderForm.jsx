import { useState } from "react";

export const FoodOrderForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [order, setOrder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Order Successful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup.`);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
        <label htmlFor="phone">Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="phone" name="phone" />
        <label htmlFor="address">Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" />
        <label htmlFor="order">Order</label>
        <input value={order} onChange={(e) => setOrder(e.target.value)} type="text" id="order" name="order" />
        <button type="submit">Submit Order</button>
    </form>
  )
}