import React,{useState} from "react";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect.js";
import Table from "../components/Table";
import FloatingButton from "../components/FloatingButton";
import ContainerFloatingAction from "../components/ContainerFloatingAction";
import ContainerPage from "../components/ContainerPage";

const Home = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const [filter,setFilter]=useState('')
  console.log(searchTerm)
  return (
    <ContainerPage title="Liste des clients">
      <Box sx={{ dispay: "flex", mb: 3 }}>
        <SearchBar searchTerm={searchTerm} handleSearchTerm={value=>setSearchTerm(value)} />
        <FilterSelect filter={filter} setFilter={value=>setFilter(value)} />
      </Box>
      <Table searchTerm={searchTerm} filter={filter} />
      <ContainerFloatingAction>
        <FloatingButton variant="add" />
      </ContainerFloatingAction>
    </ContainerPage>
  );
};

export default Home;
