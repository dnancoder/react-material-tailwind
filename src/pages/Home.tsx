import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Home: React.FC = () => (
  <Container className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <Typography variant="h2" className="mb-4 text-blue-600">Welcome to Home Page</Typography>
    <Typography variant="body1" className="mb-8 text-gray-700">This is a sample homepage using Material UI and Tailwind CSS.</Typography>
    <Button variant="contained" color="primary">Get Started</Button>
  </Container>
);

export default Home;
