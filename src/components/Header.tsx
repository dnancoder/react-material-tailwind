import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <Typography variant="h6" className="text-white">
          Sample App Header Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;