import { Avatar, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Box } from "@mui/system";
import { MdAddPhotoAlternate, MdOutlineEmojiEmotions } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import ModalPost from '../ModalPost';


export const PostUser = () => {
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
            backgroundColor: '#8f0000',
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
                sx={{
                  marginTop: 2,
                  width: 260,
                  height: 50,
                  backgroundColor: '#c0c0c086',
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fdfdfd"
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
                  color={'#fff'}
                  fontFamily={"sans-serif"}
                  fontSize={15}
                  
              >
                <RiVideoAddFill  color='#ff5232' fontSize={35} onClick={() => {}}/> Videos 
                <MdAddPhotoAlternate color='#f5005e' fontSize={35}/> Fotos
                <MdOutlineEmojiEmotions color='#ffdfd4' fontSize={35}/> Sentimentos
              </Stack>
          </Stack>
        </Box>
      </Stack>
      <ModalPost/>
    </>
  )
}