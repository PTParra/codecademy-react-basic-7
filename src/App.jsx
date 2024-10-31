import React from 'react';
import { FoodItem } from './components/foodItem';
import { FoodOrderForm } from './components/FoodOrderForm';
import styles from "./App.module.css";
import { Header } from './components/header';

/*
  In this practice project, you will create a food order form for a restaurant.

  The local mom-and-pop shop, Saucy Tango, has received a lot of love from the community recently. To keep up with demand, 
  they’ve decided to open their restaurant for online orders. They’ve entrusted this task to you, a budding React developer.

  Your goal is to create a functional form that allows customers to place their orders easily. Once the customer submits
  the form, the form will alert them about their order details. You will be provided with a menu and your task is to create
  a form that can take in customer details such as name, phone number, address, and order.

*/

export const App = () => {

	return (
    <div className={styles.container}>
      <Header />
      <FoodItem name="Shakshuka" price={5.99} imgSrc="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <FoodItem name="Spaghetti Carbonara" price={6.99} imgSrc="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <FoodItem name="Margherita Pizza" price={2.99} imgSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
      <FoodOrderForm />
    </div>
  )
}