import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import ContainerFloatingAction from "../components/ContainerFloatingAction";
import ContainerPage from "../components/ContainerPage";
import FloatingButton from "../components/FloatingButton";
import { updateClient } from "../actions/clientActions";
import addClientSchema from "../schemas/addClientSchema";
import { HOME } from "../constants/routes";
import StyledInput from "../components/StyledInput";

const AddClient = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const client = useSelector((state) =>
    state.clients.find((elem) => elem.id === id)
  );
  const formik = useFormik({
    initialValues: {
      firstName: client.firstName,
      lastName: client.lastName,
      age: client.age,
      region: client.region,
    },
    validationSchema: addClientSchema,
    onSubmit: (values) => {
      dispatch(updateClient({ ...values, id: client.id }));
    },
  });
  console.log(formik.touched);

  return (
    <ContainerPage title="Modifier client">
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#23233F",
          border: theme.palette.primary.main,
          border: "1px solid rgb(51,55,103)",
          borderRadius: "10px",
          p: 3,
        }}
      >
        <Typography variant="h7"  sx={{mb:2,display:"block",color:"#a7b7e3" }}>Informations générales</Typography>
        <form onSubmit={formik.handleSubmit}>
          <StyledInput
            fullWidth
            label="ID"
            color="secondary"
            sx={{ my: 1 }}
            disabled
            value={client.id}
          />
          <StyledInput
            fullWidth
            label="Prénom"
            color="secondary"
            name="firstName"
            sx={{ my: 1 }}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            onBlur={formik.handleChange}
            onChange={formik.handleChange}
            helperText={formik.touched.firstName && formik.errors.firstName}
            value={formik.values.firstName}
          />
          <StyledInput
            label="Nom"
            color="secondary"
            sx={{ my: 1 }}
            fullWidth
            name="lastName"
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            onBlur={formik.handleChange}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <StyledInput
            color="secondary"
            fullWidth
            label="Age"
            name="age"
            type="number"
            error={Boolean(formik.touched.age && formik.errors.age)}
            onBlur={formik.handleChange}
            helperText={formik.touched.age && formik.errors.age}
            onChange={formik.handleChange}
            value={formik.values.age}
            sx={{ my: 1 }}
          />
          <StyledInput
            name="region"
            color="secondary"
            fullWidth
            label="Région"
            error={Boolean(formik.touched.region && formik.errors.region)}
            onBlur={formik.handleChange}
            helperText={formik.touched.region && formik.errors.region}
            onChange={formik.handleChange}
            value={formik.values.region}
            sx={{ my: 1 }}
          />
        </form>
      </Paper>
      <ContainerFloatingAction>
        <FloatingButton
          variant="return"
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        />
        <FloatingButton
          variant="save"
          onClick={() => {
            formik.handleSubmit();
            navigate(HOME);
          }}
        />
      </ContainerFloatingAction>
    </ContainerPage>
  );
};

export default AddClient;
