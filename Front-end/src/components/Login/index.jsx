import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastroPage, goToHomePage } from "../../routes/coordinator";

export const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    password: '',
    weight: '',
    showPassword: false,
  })
  // const Entrar = () => {
  //   setProgresseLogin(true)
  //   window.localStorage.setItem("tokenName",values.name)
  //   window.localStorage.setItem("tokenPassword",values.password)
  //   Token()
  // }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            Social
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
              <FormControl variant="standard" sx={{
                width: 300,
                marginTop: 7,
                marginBottom: 7,
                marginLeft: "auto",
                marginRight: "auto",
              }}>
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>

                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Stack spacing={2} >
                <Button
                  onClick={() => { goToHomePage(navigate) }}
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
                > Entrar
                </Button>
                <Button
                  onClick={() => { goToCadastroPage(navigate) }}
                  sx={{
                    fontSize: "16px",
                    color: "#3f60b9",
                    textDecoration: "none",
                    marginTop: 35,
                    fontWeight: 600
                  }}
                >
                  Criar Conta
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}