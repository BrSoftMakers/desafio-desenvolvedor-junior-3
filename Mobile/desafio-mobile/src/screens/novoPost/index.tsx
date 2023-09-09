import React, { useState } from "react";
import { Header } from "../../components/header"
import { View, StyleSheet, Text,TextInput, TouchableOpacity } from "react-native";
import SyncStorage from "sync-storage";
import { variavelAmbiente } from "../../../variavelAmbiente";

const host = variavelAmbiente.REACT_APP_HOST;

export const NovoPost = ({navigation}) => {

    const usuario = JSON.parse(SyncStorage.get("usuario"));

    const timeElapsed = Date.now();
    const dataAtual = new Date(timeElapsed);

    const [dadosPost, setDadosPost] = useState({
        titulo: "",
        artigo: "",
        id_usuario_insercao: usuario.id,
        usuario_insercao: usuario.nome,
        dataCreatedAt: dataAtual,
        dataUpdatedAt: null
    });

    async function postar() {
        fetch(host+":8090/posts",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dadosPost)
        })
        .then((resp)=>{
            if(resp.status === 200 || resp.status === 201){
                alert("Publicado com sucesso!")
                navigation.navigate("posts");
            }
        })
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.post}>
                <View style={styles.flex}>
                    <Text style={styles.text}>Titulo:</Text>
                    <TextInput style={styles.input} multiline={true} value={dadosPost.titulo} onChangeText={(e)=> setDadosPost({...dadosPost, titulo: e})}/>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text}>Artigo: </Text>
                    <TextInput style={styles.textarea} multiline={true} value={dadosPost.artigo} onChangeText={(e)=> setDadosPost({...dadosPost, artigo: e})}/>
                </View>
                <View style={styles.flexCenter}>
                    <TouchableOpacity onPress={postar} style={styles.button}>
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