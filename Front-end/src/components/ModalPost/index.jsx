import { Divider, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalPost({open, setOpen,handleOpen, handleClose}) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2"
              textAlign={"center"}
              marginBottom={2}
            >
              Criar publicação
            </Typography >
            <Divider
              marginBottom={4}
            />
            <TextField
            fullWidth 
              id="outlined-textarea"
              multiline
              fontSize={15}
              placeholder='No que você esta pensando, nome?'
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}