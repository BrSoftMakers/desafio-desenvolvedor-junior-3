import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native"
import SyncStorage from "sync-storage";

export const Header = ({navigation}) => {
    const usuario = JSON.parse(SyncStorage.get("usuario"));

    function sair (){
        navigation.navigate('login');
        SyncStorage.remove("usuario");
        SyncStorage.remove("token");
    }
    return(
        <View style={styles.container}>
            <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                <Text style={{color: "#323232", fontSize: 18, fontWeight: "bold", margin: 5}}>{usuario.nome}</Text>
                <TouchableOpacity onPress={sair}>
                    <Text style={{color: "red", fontSize: 18, fontWeight: "bold", marginRight: 15}}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                <Text style={styles.titulo}>Blog</Text>
                <TouchableOpacity onPress={() => navigation.navigate('posts')}>
                    <Text style={styles.menu}>Postagens</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('novoPost')}>
                    <Text style={styles.menu}>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        backgroundColor: "#04B3C8",
        marginTop: 30,
        justifyContent: "space-around"
    },
    titulo: {
        fontWeight: "bold",
        color: "#323232",
        fontSize: 40,
    },
    menu: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
})