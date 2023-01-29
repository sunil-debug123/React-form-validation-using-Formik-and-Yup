import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({list, onModalClose}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => 
  {
    setOpen(false)
    if(onModalClose)
    {
      onModalClose(false)
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CancelIcon onClick={handleClose} className='cancel' />
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <span style={{fontWeight: 'bold'}}>First Name : </span>{list?.firstName}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span style={{fontWeight: 'bold'}}>Last Name : </span> {list?.lastName}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span style={{fontWeight: 'bold'}}>Email : </span> {list?.email}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span style={{fontWeight: 'bold'}}>Roll No : </span> {list?.rollNo}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span style={{fontWeight: 'bold'}}>Section: </span>{list?.section}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes= {
  list: PropTypes.object,
}
BasicModal.defaultProps= {
  list: {},
}