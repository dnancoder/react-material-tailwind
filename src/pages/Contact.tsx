import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Contact: React.FC = () => (
  <Container className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <Typography variant="h4" className="mb-4 text-purple-700">Contact Us</Typography>
    <form className="flex flex-col gap-4 w-full max-w-sm">
      <TextField label="Name" variant="outlined" required />
      <TextField label="Email" variant="outlined" required type="email" />
      <TextField label="Message" variant="outlined" required multiline rows={4} />
      <Button variant="contained" color="secondary" type="submit">Send</Button>
    </form>
  </Container>
);

export default Contact;
