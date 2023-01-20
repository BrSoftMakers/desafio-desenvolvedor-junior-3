import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const TitleError = "4{}4"
    const SubTitleError = "{}{}PS!"

    return (
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
                <Typography component="div" variant="h1" sx={{
                    paddingTop: "10%",
                    paddingBottom: 4,
                    fontSize: 180,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    color: "#0d163d"
                }}>
                    {TitleError}
                </Typography>
                <Typography component="div" variant="h4" sx={{
                    paddingTop: 2,
                    paddingBottom: 4,
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    color: "#353535"
                }}>
                    {SubTitleError}
                </Typography>
                <Typography component="div" variant="h4" sx={{
                    paddingBottom: 4,
                    fontSize: 30,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    color: "#353535"
                }}>
                    -
                </Typography>
                <Typography component="div" variant="h4" sx={{
                    paddingBottom: 4,
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    color: "#353535",
                    width: "98%",
                }}>
                    Algo deu errado volte para a pagina homer
                </Typography>
                <Button
                    sx={{
                        paddingLeft: 10.3,
                        paddingRight: 10.3,
                        background: "#000",
                        '&:hover': {
                            backgroundColor: '#222'
                        },
                    }}
                    size="small"
                    variant="contained"
                    onClick={() => goToHomePage(navigate)}> Retornar </Button>
        </Stack>
    )
}
