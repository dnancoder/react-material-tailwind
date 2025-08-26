import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => (
  <AppBar position="static" className="bg-blue-700">
    <Toolbar className="flex justify-between">
      <Typography variant="h6" className="font-bold">
        React Material Tailwind
      </Typography>
      <div className="flex gap-4">
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default NavBar;
