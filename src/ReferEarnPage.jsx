// src/ReferEarnPage.js
import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" paragraph>
        Refer a friend and earn rewards for every successful referral!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <ReferralFormModal handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default ReferEarnPage;
