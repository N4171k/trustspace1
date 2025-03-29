import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // This will be replaced with actual data from the API
  const userProperties = [
    {
      id: 1,
      title: 'Luxury Villa',
      status: 'Active',
      bookings: 5,
      revenue: 2500,
    },
    {
      id: 2,
      title: 'Modern Apartment',
      status: 'Pending',
      bookings: 2,
      revenue: 1000,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>
        <Button
          component={Link}
          to="/properties/new"
          variant="contained"
          color="primary"
        >
          Add New Property
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Properties
              </Typography>
              <Typography variant="h4">{userProperties.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Bookings
              </Typography>
              <Typography variant="h4">
                {userProperties.reduce((acc, prop) => acc + prop.bookings, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h4">
                ${userProperties.reduce((acc, prop) => acc + prop.revenue, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Properties List */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Your Properties
          </Typography>
          <Grid container spacing={2}>
            {userProperties.map((property) => (
              <Grid item xs={12} md={6} key={property.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {property.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Status: {property.status}
                    </Typography>
                    <Typography variant="body2">
                      Bookings: {property.bookings}
                    </Typography>
                    <Typography variant="body2">
                      Revenue: ${property.revenue}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/properties/${property.id}/edit`}
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Edit Property
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 