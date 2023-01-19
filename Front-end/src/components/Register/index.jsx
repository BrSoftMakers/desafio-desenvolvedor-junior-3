import { Box, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "420px",
            height: "600px",
          }}
        >
          <Stack
            sx={{
              color: "#910101",
              fontSize: "40px",
              textAlign: "center",
              marginTop: "20px",
            }}
            spacing={2}>

            Cadastro

            <Stack>

            <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                sx={{
                  width: 300,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{
                  width: 300,
                  marginTop: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <TextField
                id="standard-basic"
                label="Senha"
                variant="standard"
                sx={{
                  width: 300,
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
            </Stack>
            <Button
              onClick={() => { goToLoginPage(navigate) }}

              sx={{
                color: "#ffffff",
                width: 300,
                background: "#910101",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                '&:hover': {
                  backgroundColor: '#b13333'
                },
              }}
              size="small"
              variant="contained"
            > Voltar </Button>

            <Button
              onClick={() => { goToLoginPage(navigate) }}
              sx={{
                color: "#ffffff",
                width: 300,
                background: "#3f60b9",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                '&:hover': {
                  backgroundColor: '#7489c2'
                },
              }}
              size="small"
              variant="contained"
            > Criar </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}