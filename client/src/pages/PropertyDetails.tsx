import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openBookingDialog, setOpenBookingDialog] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    numberOfGuests: 1,
  });

  // This will be replaced with actual data from the API
  const property = {
    id: 1,
    title: 'Luxury Villa',
    description: 'Beautiful villa with pool and garden',
    price: 500,
    image: 'https://source.unsplash.com/random/800x600/?villa',
    amenities: ['Pool', 'Garden', 'Parking', 'WiFi'],
    location: 'Beverly Hills, CA',
    owner: {
      name: 'John Doe',
      rating: 4.8,
      reviews: 120,
    },
  };

  const handleOpenBookingDialog = () => {
    setOpenBookingDialog(true);
  };

  const handleCloseBookingDialog = () => {
    setOpenBookingDialog(false);
  };

  const handleBookingSubmit = () => {
    // TODO: Implement booking logic
    console.log('Booking submitted:', bookingData);
    handleCloseBookingDialog();
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Property Image */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={property.image}
              alt={property.title}
            />
          </Card>
        </Grid>

        {/* Property Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {property.title}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                ${property.price}/night
              </Typography>
              <Typography variant="body1" paragraph>
                {property.description}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Location: {property.location}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Host: {property.owner.name} ({property.owner.rating}★, {property.owner.reviews} reviews)
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleOpenBookingDialog}
                sx={{ mt: 2 }}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Amenities */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Amenities
          </Typography>
          <Grid container spacing={2}>
            {property.amenities.map((amenity) => (
              <Grid item key={amenity}>
                <Card>
                  <CardContent>
                    <Typography>{amenity}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={openBookingDialog} onClose={handleCloseBookingDialog}>
        <DialogTitle>Book {property.title}</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Start Date"
              type="date"
              name="startDate"
              value={bookingData.startDate}
              onChange={handleBookingChange}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="End Date"
              type="date"
              name="endDate"
              value={bookingData.endDate}
              onChange={handleBookingChange}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Number of Guests"
              type="number"
              name="numberOfGuests"
              value={bookingData.numberOfGuests}
              onChange={handleBookingChange}
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBookingDialog}>Cancel</Button>
          <Button onClick={handleBookingSubmit} variant="contained" color="primary">
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PropertyDetails; 