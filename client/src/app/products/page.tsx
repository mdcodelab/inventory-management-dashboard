"use client";
import React from "react";
import { useState } from "react";
import { useGetAllProductsQuery } from "../state/api";
import Header from "../(components)/header/Header";
import { SearchIcon } from "lucide-react";
import { PlusCircle } from "lucide-react";
import Rating from "../(components)/rating/Rating";
import CreateProductModal from "./CreateProductModal";
import { useCreateProductMutation } from "../state/api";

const ProductsPage = () => {
const[searchTerm, setSearchTerm]=useState("");
const [isModalOpen, setIsModalOpen] = useState(false);

const {data:products, isLoading, isError} = useGetAllProductsQuery(searchTerm);
console.log("Products", products);
const[createProduct]=useCreateProductMutation();

type ProductFormData = {
productId:string,
name: string,
price: number,
rating: number,
stockQuantity: number
}

const handleCreateProduct = async (productData:ProductFormData)=> {
await createProduct(productData);
}

if(isLoading) {
    return <div className="py-4">Loading...</div>
}

if(isError || !products) {
    return <div className="text=center text-red-500">Failed to fetch products.</div>
}



    return (
       <div className="w-full mx-auto pb-5">
        
         {/* SEARCH BAR*/}
         <div className="mb-6">
                <div className="flex items-center border-2 border-gray-200 rounded">
                    <SearchIcon className="w-5 h-5 text-gray-500 mb-2"></SearchIcon>
                    <input className="w-full py-2 px-4 rounded bg-white"
                     value={searchTerm} placeholder="Search products..." onChange={(e)=>setSearchTerm(e.target.value) }></input>
                </div>
         </div>

         {/* HEADER BAR*/}
         <div className="flex items-center justify-between mb-6 px-1">
            <Header name="Products"></Header>
            <button type="button" className="flex items-center bg-blue-500 hover:bg-blue-700 
            text-gray-200 font-semibold py-2 px-4 rounded" onClick={()=> setIsModalOpen(true)}>
                <PlusCircle className="w-5 h-5 text-gray-200 mr-2"></PlusCircle> Create Product
            </button>
         </div>

         {/* BODY PRODUCTS LIST*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between px-1">
                {isLoading ? <div>Loading...</div> : (
                    products?.map((product)=> {
                        return (
                            <div key={product.productId} className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
                                <div className="flex flex-col items-center">
                                    image
                                    <h3 className="text-lg text-gray-500 text-semibold">{product.name}</h3>
                                    <p className="text-gray-800">${product.price.toFixed(2)}</p>
                                    <div className="text-sm text-gray-600mt-2">Stock: {product.stockQuantity}</div>
                                    {product.rating && (
                                        <div className="mt-2 flex items-center"><Rating rating={product.rating}></Rating></div>
                                    )}
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            {/* MODAL*/}
            <CreateProductModal isOpen={isModalOpen} onClose={()=> setIsModalOpen(false)}
                onCreate={handleCreateProduct}></CreateProductModal>

       </div>
    )
}

export default ProductsPage;