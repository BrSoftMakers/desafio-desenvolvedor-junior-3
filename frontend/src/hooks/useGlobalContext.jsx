import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

function useGlobalContext() {
    return useContext(GlobalContext);
}

export default useGlobalContext;