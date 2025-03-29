import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Trust Space
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Your Premier Platform for Luxury Property Rentals
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/properties"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Browse Properties
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            size="large"
          >
            List Your Property
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 