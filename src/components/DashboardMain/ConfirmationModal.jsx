import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ConfirmationModal({ open, handleClose, handleDelete, postTitle }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
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
        }}
      >
        <Typography id='modal-title' variant='h6' component='h2'>
          Are you sure you want to delete "{postTitle}"?
        </Typography>
        <Box mt={2} display='flex' justifyContent='flex-end' gap={2}>
          <Button variant='contained' color='error' onClick={handleDelete}>
            Yes
          </Button>
          <Button variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ConfirmationModal;
