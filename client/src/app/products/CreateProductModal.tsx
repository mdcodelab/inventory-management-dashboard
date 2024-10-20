"use client";
import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";
import { promises } from "readline";
import { v4 } from "uuid";
import Header from "../(components)/header/Header";

type ProductFormData = {
    name: string,
    price: number,
    rating: number,
    stockQuantity: number
}


type CreateProductModalProps = {
    isOpen: boolean,
    onClose: ()=>void,
    onCreate: (formData:ProductFormData)=>void
}


const CreateProductModal = ({isOpen, onClose, onCreate}:CreateProductModalProps) => {
    const[formData, setFormData]=useState({
        productId: v4(),
        name: "",
        price: 0,
        rating: 0,
        stockQuantity: 0
    }
    );

    if(!isOpen) {return null}

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        onCreate(formData);
        onClose();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        const {name, value}=e.target;
        setFormData({...formData, [name]: name === "price" || name === "rating" 
            || name === "stockQuantity" ? parseFloat(value) : value})
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-60 overflow-y-auto w-full h-full z-20">
            <div className="relative top-20 mx-auto p-5 w-96 shadow-lg rounded-md bg-white">
                <Header name="Create New Product"></Header>
                <form onSubmit={handleSubmit} className="mt-5">
                    {/* product name*/}
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} 
                    placeholder="Name..." className="w-full p-2 mb-2 border-gray-500 border-2 rounded-md bg-white" required></input>
                    
                    {/* product price*/}
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} 
                    placeholder="Price..." className="w-full p-2 mb-2 border-gray-500 border-2 rounded-md bg-white" required></input>
                                    
                     {/* rating*/}
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
                    <input type="number" name="rating" value={formData.rating} onChange={handleChange} 
                    placeholder="Rating..." className="w-full p-2 mb-2 border-gray-500 border-2 rounded-md bg-white" required></input>                
                
                    {/* stockQuantity*/}
                    <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">Stock Quantity:</label>
                    <input type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} 
                    placeholder="Stock quantity..." className="w-full p-2 mb-2 border-gray-500 border-2 rounded-md bg-white" required></input> 

                    {/* create actions*/}
                    <button type="submit" className="mt-1 bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-700"
                    >Create</button>
                    <button type="button" className="ml-2 mt-1 bg-gray-500 px-4 py-2 text-white rounded hover:bg-blue-700"
                    onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProductModal;