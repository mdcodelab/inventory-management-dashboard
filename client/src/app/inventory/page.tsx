"use client";
import { useGetAllProductsQuery, useCreateProductMutation } from "../state/api";
import Header from "../(components)/header/Header";
import { DataGrid, GridColDef} from "@mui/x-data-grid";

const InventoryPage = () => {
    const {data:products, isLoading, isError}=useGetAllProductsQuery();
//console.log("Products", products);

if(isLoading) {
    return (<div className="py-4">Loading...</div>)
}

if(isError || !products) {
    return (<div className="text-center text-red-500 py-4">Failed to fetch products.</div>)
}

const columns:GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "price", headerName: "Price", width: 110, type: "number", valueGetter:(value, row)=> `$${row.price}` },
    { field: "rating", headerName: "Rating", width: 150, type: "number", valueGetter:(value, row)=>row.rating ? row.rating : "N/A" },
    { field: "stockQuantity", headerName: "Stock Quantity", width: 150 }
]
    const rowsClass = "text-grey-500";
    return (
        <div className="flex flex-col">
            <Header name="Inventory - All Products"></Header>
            <DataGrid 
            rows={products}
            columns={columns}
            getRowId={(row)=> row.productId}
            checkboxSelection
            className="bg-white shadow rounded:lg bordered border-gray-200 mt-5 text-red-500"
            sx={{
                "& .MuiDataGrid-cellCheckbox": {
                    color: "rgb(255, 255, 255)",
                },
                "& .MuiDataGrid-row": {
                    color: "lightgrey", 
                },
            }}
            />
            
        </div>
    )

}

export default InventoryPage;