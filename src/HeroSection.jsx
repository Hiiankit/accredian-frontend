import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';
import { useState } from 'react';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" paragraph>
        Refer a friend and earn rewards for every successful referral!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        Refer Now
      </Button>
      <ReferralFormModal open={modalOpen} onClose={handleModalClose} />
    </Container>
  );
};

export default HeroSection;