import React, { useState} from "react";
import * as L from "./style";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const [acesso, setAcesso] = useState(false);
    const [cadastro, setCadastro] = useState(false);

    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        usuario: "",
        senha: ""
    });

    const [dadosLogin, setDadosLogin] = useState({
        usuario: "",
        senha: ""
    });

    async function login() {
        try {
            const resp = await fetch(process.env.REACT_APP_HOST+":8090/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosLogin),
            });
    
            if (!resp.ok) {
                throw new Error('Falha na requisição.');
            }
    
            const data = await resp.json();
            if(data){
                const usuario = await fetch(process.env.REACT_APP_HOST+`:8090/register/${dadosLogin.usuario}`);
                const dadoUsuario = await usuario.json();
                localStorage.setItem("usuario", JSON.stringify(dadoUsuario));
                localStorage.setItem("token", JSON.stringify(data.access_token));
                navigate("/posts");
            }
        } catch (erro) {
            console.error('Ocorreu um erro:', erro);
        }
    }

    async function cadastrar() {
        if(dadosCadastro.nome && dadosCadastro.email && dadosCadastro.senha && dadosCadastro.usuario){
            fetch(process.env.REACT_APP_HOST+":8090/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dadosCadastro)
            })
            .then((resp)=>{
                if(resp.status === 201 || resp.status === 200){
                    alert("Cadastrado com sucesso");
                    setCadastro(false);
                }
            })
        }else{
            alert("Preencha todos os campos!");
        }
    }

    return (
        <L.Container>
            <L.Apresentacao>
                <h1>Blog</h1>
                <p>Site criado para que possa acessar e escrever suas proprias postagens, assim como visualizar as postagens dos demais membros.</p>
                {!acesso ? (
                    <button className="button" onClick={() => setAcesso(true)}><label>Começar agora</label></button>
                ) : null}
            </L.Apresentacao>
            {acesso ? (
                !cadastro ? (
                    <L.Acesso>
                        <h1>Login</h1>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div>
                                <label>Usuario:</label>
                                <label>Senha:</label>
                            </div>
                            <div>
                                <input value={dadosLogin.usuario} onChange={(e)=> setDadosLogin({...dadosLogin, usuario: e.target.value})}/>
                                <input type="password" value={dadosLogin.senha} onChange={(e)=> setDadosLogin({...dadosLogin, senha: e.target.value})}/>
                            </div>
                        </form>
                        <div className="buttons">
                            <button onClick={login}>Entrar</button>
                            <button onClick={() => setCadastro(true)}>Cadastre-se</button>
                        </div>
                    </L.Acesso>
                ) : (
                    <L.Acesso>
                        <h1>Cadastro</h1>
                        <form  onSubmit={(e)=>e.preventDefault()}>
                            <div>
                                <label>Nome:</label>
                                <label>Email: </label>
                                <label>Usuario:</label>
                                <label>Senha:</label>
                            </div>
                            <div>
                                <input value={dadosCadastro.nome} onChange={(e)=> setDadosCadastro({...dadosCadastro, nome: e.target.value})}/>
                                <input value={dadosCadastro.email} onChange={(e)=> setDadosCadastro({...dadosCadastro, email: e.target.value})}/>
                                <input value={dadosCadastro.usuario} onChange={(e)=> setDadosCadastro({...dadosCadastro, usuario: e.target.value})}/>
                                <input type="password" value={dadosCadastro.senha} onChange={(e)=> setDadosCadastro({...dadosCadastro, senha: e.target.value})}/>
                            </div>
                        </form>
                        <div className="buttons">
                            <button onClick={cadastrar}>Cadastrar</button>
                            <button onClick={() => setCadastro(false)}>Login</button>
                        </div>
                    </L.Acesso>
                )
            ) : null}
        </L.Container>
    )
}