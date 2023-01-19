import { Box, Link, Stack } from '@mui/material';
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
    const socialIcon = {
        marginBottom: 4,
        '&:hover': {
            color: '#b4b4b44b',
        },
    }

    const InfoFooter = {
        cursor: "pointer",
        opacity: 0.6,
        color: "#fff",
    }
    return (
        <Box
            sx={{
                width: "100%",
                bottom: 0,
                left: 0,
                height: "300px",
                backgroundColor: "#580000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Stack
                sx={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "30px",
                    fontWeight: "550",
                    letterSpacing: "2px",
                    marginBottom: 4,
                }}
            >
                Social

            </Stack>
            <Stack direction="row" spacing={2}>
                <Link
                    sx={socialIcon}
                    target="_blank"
                    href='https://www.instagram.com/'><AiFillInstagram color='#fff' fontSize={50} />
                </Link>
                <Link
                    sx={socialIcon}
                    target="_blank"
                    href='https://api.whatsapp.com/'><IoLogoWhatsapp color='#fff' fontSize={50} />
                </Link>
                <Link
                    sx={socialIcon}
                    target="_blank"
                    href='https://www.youtube.com/'><AiFillYoutube color='#fff' fontSize={50} />
                </Link>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Link onClick={() => alert("Legal")} underline="hover" color="inherit" sx={InfoFooter}>Legal</Link>
                <Link onClick={() => alert("Cookies")} underline="hover" color="inherit" sx={InfoFooter}>Cookies</Link>
                <Link onClick={() => alert("Privacy")} underline="hover" color="inherit" sx={InfoFooter}>Privacy</Link>
                <Link onClick={() => alert("Shipping")} underline="hover" color="inherit" sx={InfoFooter}>Shipping</Link>
                <Link onClick={() => alert("Refounds")} underline="hover" color="inherit" sx={InfoFooter}>Refounds</Link>
            </Stack>
            <span style={{
                color: "#f2f2f2",
                opacity: 0.3,
                textAlign: "center",
                marginTop: 20,
            }}>
                &copy;2023, Social. All rights reserved.
            </span>
        </Box >

    )
}
