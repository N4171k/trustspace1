import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PropertyList: React.FC = () => {
  // This will be replaced with actual data from the API
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      description: 'Beautiful villa with pool and garden',
      price: 500,
      image: 'https://source.unsplash.com/random/800x600/?villa',
    },
    {
      id: 2,
      title: 'Modern Apartment',
      description: 'Stylish apartment in city center',
      price: 300,
      image: 'https://source.unsplash.com/random/800x600/?apartment',
    },
    // Add more mock properties as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Properties
      </Typography>
      <Grid container spacing={4}>
        {properties.map((property) => (
          <Grid item key={property.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt={property.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {property.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {property.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${property.price}/night
                </Typography>
                <Button
                  component={Link}
                  to={`/properties/${property.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList; 