import { Container, Typography } from "@mui/material";
import React from "react";

const ContainerPage = ({title,children,...rest}) => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 ,mb:15}} {...rest} >
      <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default ContainerPage;
