import { View, StyleSheet, SafeAreaView,ScrollView, Text, TouchableOpacity, Image } from "react-native"
import { Header } from "../../components/header"
import { useEffect, useState } from "react";
import SyncStorage from "sync-storage";
import { variavelAmbiente } from "../../../variavelAmbiente";

const host = variavelAmbiente.REACT_APP_HOST;

type postType = [{
    id: number;
    titulo: string;
    artigo: string;
    dataCreatedAt: Date;
    id_usuario_insercao: number;
    usuario_insercao: string;
}]

export type postagemType = {
    id: number;
    titulo: string;
    artigo: string;
    dataCreatedAt: Date;
    dataUpdatedAt: Date;
    id_usuario_insercao: number;
    usuario_insercao: string;
}

export const Posts = ({navigation}) => {
    const user = JSON.parse(SyncStorage.get("usuario"));
    const [postagens, setPostagens] = useState<postType | []>([]);
    const [postagem, setPostagem] = useState<postagemType>();
    const [postAberto, setPostAberto] = useState(false);
    const [filtro, setFiltro] = useState({
        usuario: false,
        crescente: true
    })

    // formata a data na hora de exibir as postagens
    function dataMask(data){
        var dataHora = new Date(data);
    
        var dia = dataHora.getUTCDate();
        var mes = dataHora.getUTCMonth() + 1;
        var ano = dataHora.getUTCFullYear();
        var horas = dataHora.getHours();
        var minutos = dataHora.getMinutes();
    
        var dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
        return dataHoraFormatada;
    }

    async function fetchData(){
        const token = SyncStorage.get("token");
        const response = await fetch(host+`:8090/posts/${filtro.usuario ? user.id : 0}/${filtro.crescente ? "asc" : "desc"}`,{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
        })
        const data = await response.json();
        if(response.status === 401){
            alert("Usuário não está logado!\n"+"Por favor realizar o Login para continuar!");
            navigation.navigate("login");
            SyncStorage.remove("token");
            SyncStorage.remove("usuario");
            SyncStorage.remove("idPost");
        }else{
            setPostagens(data);
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    function abrirPost(post: postagemType){
        setPostagem(post);
        setPostAberto(true);
    }

    const deletarPost = async(post: postagemType) =>{
        fetch(host+`:8090/posts/${post.id}`,{
            method: "DELETE"
        })
        .then((resp)=>{
            if(resp.status === 200){
                alert("Deletado!");
                fetchData();
            }
        })
    }

    const abrirEditar = (post) =>{
        navigation.navigate("editarPost");
        SyncStorage.set("idPost", post.id);
    }

    useEffect(()=>{
        fetchData();
    },[filtro])

    return(
        <ScrollView style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}>
            <View style={styles.container}>
            <Header navigation={navigation}/>
            {postAberto ? (
                <View style={styles.postagemAberta}>
                    <Text style={styles.titulo}>{postagem.id} - {postagem.titulo}</Text>
                    <Text style={styles.autor}> Autor: {postagem.usuario_insercao}</Text>
                    <Text style={styles.autor}> Publicado: {dataMask(postagem.dataCreatedAt)}</Text>
                    <Text style={{marginTop: 10, color: "#323232", fontSize: 16}}>{postagem.artigo}</Text>
                    <TouchableOpacity style={styles.button} onPress={()=> setPostAberto(false)}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            ):(
                postagens.map((post: postagemType)=>{
                    return(
                        <View style={styles.postagem} key={post.id}> 
                            <View>
                                <Text style={styles.titulo} onPress={()=> abrirPost(post)}>{String(post.id)} - {post.titulo}</Text>
                                <Text  style={styles.autor}>Autor: {String(post.usuario_insercao)} Publicado: {dataMask(post.dataCreatedAt)}</Text>
                            </View>
                            {post.id_usuario_insercao == user.id ? (
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={()=> abrirEditar(post)}>
                                        <Image source={require("../../../public/images/editar.png")} style={styles.icon}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> deletarPost(post)}>
                                        <Image source={require("../../../public/images/excluir.png")} style={styles.icon}/>
                                    </TouchableOpacity>
                                </View>
                            ):null}
                        </View>
                    )
                })
            )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
    },
    postagem: {
        width: "90%",
        borderBottomWidth: 2,
        borderBottomColor: "#04B3C8",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto"
    },
    postagemAberta: {
        width: "95%",
        marginTop: 10
    },
    titulo: {
        color: "#323232",
        fontSize: 18,
        fontWeight: "bold"
    },
    autor: {
        color: "#323232",
    },
    icon: {
        height: 30,
        width: 30
    }, 
    icons: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: "#04B3C8",
        color: "#FFF",
        borderRadius: 10,
        border: "none",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20
    }
})