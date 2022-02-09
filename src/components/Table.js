import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPDATE_CLIENT } from "../constants/routes";

export default function DataGridDemo({ searchTerm, filter, sx, ...rest }) {
  const  navigate=useNavigate()
  const clients = useSelector((state) => state.clients);
  const handledSearchTerm = searchTerm.toLowerCase().trim();

  const filteredClients = filter
    ? clients.filter((elem) => {
        return elem.region.toLowerCase().trim() === filter.toLowerCase().trim();
      })
    : clients;

  const searchedClients = filteredClients.filter((elem) => {
    return (
      elem.firstName.toLowerCase().includes(handledSearchTerm) ||
      elem.lastName.toLowerCase().includes(handledSearchTerm) ||
      elem.region.toLowerCase().includes(handledSearchTerm) ||
      elem.id.toLowerCase().includes(handledSearchTerm) ||
      `${elem.firstName.toLowerCase()} ${elem.lastName.toLowerCase()}`.includes(
        handledSearchTerm
      )
    );
  });
  return (
    <Box sx={{ height: 400, width: "100%", ...sx }} {...rest}>
      <DataGrid
        rows={searchTerm ? searchedClients : filteredClients}
        rowHeight={30}
        headerHeight	={40}
        withBorder={false}
        columns={columns}
        rowsPerPageOptions={[5, 25, 100]}
        onRowClick={(params)=>navigate(`${UPDATE_CLIENT}/${params.id}`)}
        sx={{
          borderRadius:"5px",
          border:"1px solid rgb(51,55,103)",
          overflow:"hidden",
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#333058',
          },
          '& .MuiDataGrid-cell':{
            borderBottom:"none"
          },
          "& .MuiTablePagination-selectLabel":{
            display:"none"
          },
          "& .MuiTablePagination-toolbar":{
            width:"100%",
            justifyContent:"space-between"
          },
          "& .MuiTablePagination-root":{
            width:"100%",
          },
          "& .MuiTablePagination-spacer":{
            display:"none",
          },
          "& .MuiTablePagination-select":{
            flex:"1",
          },
        }}
      />
    </Box>
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "Prénom",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Nom",
    width: 150,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    width: 110,
    editable: false,
  },
  { field: "region", headerName: "Région", width: 110, editable: false },
];
