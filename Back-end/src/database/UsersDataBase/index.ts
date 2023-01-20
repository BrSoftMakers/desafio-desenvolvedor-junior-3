import { collection, getDocs } from "firebase/firestore";
import { FirebaseConfigChave } from "../firebase";

export class UsersDataBase {
    public getUsersDataBase = async () => {
        try {
            const db = FirebaseConfigChave()
            const userCollectionRef = collection(db, "Users")
            const querySnapshot = await getDocs(userCollectionRef)
            const result = querySnapshot.docs.map((doc) => doc.data())
            return result
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public findByEmail = async (email: string) => {
        const result =  {
            id: "1",
            name: "Maycon",
            email: "maycon@gmail.com",
            password: "teste",
            role: "NORMAL"
          }
        // Pro enquando não vou autenticar se o emal existe 
        return result
    }
    public createUser = async (user: any) => {
        // Pro enquando não vou autenticar se o emal existe 

    }

}