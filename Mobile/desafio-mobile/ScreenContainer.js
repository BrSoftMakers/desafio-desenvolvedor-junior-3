import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Login } from './src/screens/login';
import { Posts } from './src/screens/post';
import { NovoPost } from './src/screens/novoPost';
import { EditarPost } from './src/screens/editarPost';

const MyNavigator = createSwitchNavigator({
  login: Login,
  posts: Posts,
  novoPost: NovoPost,
  editarPost: EditarPost,
},
{
  initialRouteName: "login",
});
const Container = createAppContainer(MyNavigator);
export default Container;