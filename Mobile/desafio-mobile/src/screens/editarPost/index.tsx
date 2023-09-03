import React, { useEffect, useState } from "react";
import { Header } from "../../components/header"
import { View, StyleSheet, Text,TextInput, TouchableOpacity } from "react-native";
import SyncStorage from "sync-storage";
import { postagemType } from "../post";
import { variavelAmbiente } from "../../../variavelAmbiente";

const host = variavelAmbiente.REACT_APP_HOST;

export const EditarPost = ({navigation}) => {
    const usuario = JSON.parse(SyncStorage.get("usuario"));
    const idPost = SyncStorage.get("idPost");

    const timeElapsed = Date.now();
    const dataAtual = new Date(timeElapsed);

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

    const [dadosPost, setDadosPost] = useState<postagemType>({
        id: idPost,
        titulo: "",
        artigo: "",
        id_usuario_insercao: usuario.id,
        usuario_insercao: usuario.nome,
        dataCreatedAt: dataAtual,
        dataUpdatedAt: null
    });

    useEffect(()=>{
        async function fetchPost(){
            fetch(host+`:8090/posts/${idPost}`)
            .then((resp)=> resp.json())
            .then((data)=> setDadosPost(data))
        }
        fetchPost();
    },[])

    async function editarPost() {
        fetch(host+`:8090/posts/${idPost}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: dadosPost.id,
                titulo: dadosPost.titulo,
                artigo: dadosPost.artigo,
                id_usuario_insercao: dadosPost.id_usuario_insercao,
                usuario_insercao: dadosPost.usuario_insercao,
                dataCreatedAt: dadosPost.dataCreatedAt,
                dataUpdatedAt: dataAtual
            })
        })
        .then((resp)=>{
            if(resp.status === 200 || resp.status === 201){
                alert("Editado com sucesso!")
                navigation.navigate("posts");
            }
        })
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.post}>
                <View style={styles.flexCenter}>
                    <Text style={styles.text}>Autor: {usuario.nome} </Text>
                    <Text>Criado: {dataMask(dadosPost.dataCreatedAt)} </Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text}>Titulo:</Text>
                    <TextInput style={styles.input} multiline={true} value={dadosPost.titulo} onChangeText={(e)=> setDadosPost({...dadosPost, titulo: e})}/>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text}>Artigo: </Text>
                    <TextInput style={styles.textarea} multiline={true} value={dadosPost.artigo} onChangeText={(e)=> setDadosPost({...dadosPost, artigo: e})}/>
                </View>
                <View style={styles.flexCenter}>
                    <TouchableOpacity onPress={editarPost} style={styles.button}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("posts")} style={styles.button}>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    post: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center"
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    }, 
    flexCenter: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },    
    input: {
        width: "90%",
        height: 30,
        backgroundColor: "#E8E8E8",
        margin: 5,
        borderRadius: 10,
    },
    textarea: {
        width: "90%",
        height: 100,
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
    },
    text: {
        fontWeight: "bold",
        color: "#323232",
    }

})