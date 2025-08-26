import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const About: React.FC = () => (
  <Container className="flex flex-col items-center justify-center min-h-screen bg-white">
    <Card className="w-full max-w-md shadow-lg">
      <CardContent>
        <Typography variant="h4" className="mb-2 text-green-600">About Us</Typography>
        <Typography variant="body2" className="text-gray-600">This page demonstrates usage of Material UI Card and Tailwind CSS for layout and styling.</Typography>
      </CardContent>
    </Card>
  </Container>
);

export default About;
