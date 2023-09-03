import { useState } from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import SyncStorage  from "sync-storage";
import { variavelAmbiente } from "../../../variavelAmbiente";

const host = variavelAmbiente.REACT_APP_HOST;

type cadastroType = {
    nome: string,
    email: string,
    usuario: string,
    senha: string
}
type loginType = {
    usuario: string,
    senha: string
}

export const Login = ({navigation}) => {
    const [cadastro, setCadastro] = useState(false);
    const [usuarioErrado, setUsuarioErrado] = useState(false);
    const [dadosCadastro, setDadosCadastro] = useState<cadastroType>({
        nome: "",
        email: "",
        usuario: "",
        senha: ""
    });

    const [dadosLogin, setDadosLogin] = useState<loginType>({
        usuario: "",
        senha: ""
    });

    async function login() {
        setUsuarioErrado(false);
        try {
            const resp = await fetch(host+`:8090/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosLogin),
            });
    
            if (!resp.ok) {
                setUsuarioErrado(true);
                throw new Error('Falha na requisição.');
            }
    
            const data = await resp.json();
            if(data){
                const usuario = await fetch(host+`:8090/register/${dadosLogin.usuario}`);
                const dadoUsuario = await usuario.json();
                SyncStorage.set('usuario', JSON.stringify(dadoUsuario));
                SyncStorage.set('token', JSON.stringify(data.access_token));
                navigation.navigate('posts');
            }else{
                setUsuarioErrado(true);
            }
        } catch (erro) {
            console.error('Ocorreu um erro:', erro);
        }
    }

    async function cadastrar() {
        if(dadosCadastro.nome && dadosCadastro.email && dadosCadastro.senha && dadosCadastro.usuario){
            fetch(host+":8090/register", {
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
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.descricao}>
                <Text style={styles.titulo}>Blog</Text>
                <Text style={styles.paragrafo}>
                    Site criado para que possa acessar e escrever suas proprias postagens, assim como visualizar as postagens dos demais membros.
                </Text>
            </View>
            
            {!cadastro ? (
                <View style={styles.acesso}>
                    <Text style={styles.titulo}>Login</Text>
                    {usuarioErrado && <Text style={{color: "red"}}>Usuario e/ou senha invalidos!</Text>}
                    <View style={{width: "100%", display: "flex", flexDirection: "row"}}>
                        <View style={{width: "20%", display: "flex", justifyContent: "space-around", alignItems: "flex-end"}}>
                            <Text style={styles.paragrafo}>Usuario:</Text>
                            <Text style={styles.paragrafo}>Senha:</Text>
                        </View>
                        <View style={{width: "80%"}}>
                            <TextInput style={styles.input} value={dadosLogin.usuario} onChangeText={(e)=> setDadosLogin({...dadosLogin, usuario: e})}/>
                            <TextInput style={styles.input} value={dadosLogin.senha} onChangeText={(e)=> setDadosLogin({...dadosLogin, senha: e})}/>
                        </View>
                    </View>
                    <View style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <TouchableOpacity style={styles.button} onPress={login}>
                            <Text style={{color: "white"}}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=> setCadastro(true)}>
                            <Text style={{color: "white"}}>Registre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ):(
                <View style={styles.acesso}>
                    <Text style={styles.titulo}>Cadastro</Text>
                    <View style={{width: "100%", display: "flex", flexDirection: "row"}}>
                        <View style={{width: "20%", display: "flex", justifyContent: "space-around", alignItems: "flex-end"}}>
                            <Text style={styles.paragrafo}>Nome:</Text>
                            <Text style={styles.paragrafo}>Email:</Text>
                            <Text style={styles.paragrafo}>Usuario:</Text>
                            <Text style={styles.paragrafo}>Senha:</Text>
                        </View>
                        <View style={{width: "80%"}}>
                            <TextInput style={styles.input} value={dadosCadastro.nome} onChangeText={(e)=> setDadosCadastro({...dadosCadastro, nome: e})}/>
                            <TextInput style={styles.input} value={dadosCadastro.email} onChangeText={(e)=> setDadosCadastro({...dadosCadastro, email: e})}/>
                            <TextInput style={styles.input} value={dadosCadastro.usuario} onChangeText={(e)=> setDadosCadastro({...dadosCadastro, usuario: e})}/>
                            <TextInput style={styles.input} value={dadosCadastro.senha} onChangeText={(e)=> setDadosCadastro({...dadosCadastro, senha: e})}/>
                        </View>
                    </View>
                    <View style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <TouchableOpacity style={styles.button} onPress={cadastrar}>
                            <Text style={{color: "white"}}>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=> setCadastro(false)}>
                            <Text style={{color: "white"}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    descricao: {
        width: "100%",
        height: "50%",
        backgroundColor: "#04B3C8",
        alignItems: "center",
        justifyContent: "center"
    },
    acesso: {
        width: "100%",
        height: "50%",
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        fontSize: 38,
        color: "#323232"
    },
    paragrafo: {
        color: "#323232"
    },
    input: {
        width: "90%",
        height: 30,
        backgroundColor: "#E8E8E8",
        margin: 5,
        borderRadius: 10,
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#04B3C8",
        color: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    }
})