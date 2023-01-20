import { Avatar, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Box } from "@mui/system";
import { useState } from 'react';
import { MdAddPhotoAlternate, MdOutlineEmojiEmotions } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import ModalPost from '../ModalPost';


export const PostUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            marginTop: 2,
            width: 350,
            height: 150,
            backgroundColor: '#fff',
            border: "1px solid #25252533",
            borderRadius: 2
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Stack
              marginTop={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={"primary-search-account-menu"}
                aria-haspopup="true"
                onClick={() => alert("Representativo, não faz nada")}
                color="inherit"
              >
                <Avatar sx={{ bgcolor: deepOrange[800] }}>M</Avatar>
              </IconButton>
              <Stack
                onClick={handleOpen}
                sx={{
                  marginTop: 2,
                  width: 260,
                  height: 50,
                  backgroundColor: '#c7c7c785',
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#505050",
                  border: "1px solid #25252533",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: '#c5c5c5',
                    transition: "0.1s ease-in"
                  }

                }}
              >
                No que você está pensando, Nome?
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              color={'#352f2f'}
              fontFamily={"sans-serif"}
              fontSize={15}
              sx={{ cursor: "pointer" }}
              onClick={handleOpen}
            >
              <RiVideoAddFill
                color='#ff5232'
                fontSize={35}
              /> Videos
              <MdAddPhotoAlternate color='#f5005e' fontSize={35} /> Fotos
              <MdOutlineEmojiEmotions color='#f5b49e' fontSize={35} /> Sentimentos
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <ModalPost
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}