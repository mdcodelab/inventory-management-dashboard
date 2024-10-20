"use client";
import { useGetAllUsersQuery } from "../state/api";
import Header from "../(components)/header/Header";
import { DataGrid, GridColDef} from "@mui/x-data-grid";

const UsersPage = ()=> {
const {data:users, isLoading, isError}=useGetAllUsersQuery();
//console.log("Users", users);

if((isLoading)) {
return <div className="py-4">Loading</div>
}

if(isError || !users) {
    return <div className="bg-red-500 text-center">Failed to fetch data.</div>
}

const columns:GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "User Name", width: 90 },
    { field: "email", headerName: "Email", width: 200, valueGetter:(value, row)=> `$${row.email}` },
]


    return (
        <div className="flex flex-col">
            <Header name="Users"></Header>
            <DataGrid 
            rows={users}
            columns={columns}
            getRowId={(row)=> row.userId}
            checkboxSelection
            className="bg-white shadow rounded:lg bordered border-gray-200 mt-5 text-gray-700"
            />
            
        </div>

    )
}

export default UsersPage;