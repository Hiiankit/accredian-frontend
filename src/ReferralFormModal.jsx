import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ReferralFormModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to submit referral');
      }

      const data = await response.json();
      console.log('Referral data saved successfully:', data);
      onClose(); // Close modal after successful submission
      alert('Referral data saved successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Failed to save referral data');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <Typography variant="h6" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Your Name"
            name="referrerName"
            value={form.referrerName}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Your Email"
            name="referrerEmail"
            value={form.referrerEmail}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Friend's Name"
            name="refereeName"
            value={form.refereeName}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Friend's Email"
            name="refereeEmail"
            value={form.refereeEmail}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Course (Optional)"
            name="course"
            value={form.course}
            onChange={handleChange}
          />
          <Box mt={2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
