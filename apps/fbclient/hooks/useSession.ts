import  React from 'react';
import { useLocalStorage } from '@mantine/hooks';



interface IUserProps {
    email?: string;
    name?: string;
}

export const useSession =  () => {
    const [user, setUser] = useLocalStorage<IUserProps>({ key: 'user', defaultValue: null})
    const [isAuth, setIsAuth] = React.useState(() => {
        if(!user) {
            return false
        }
        return true
    })

  

    return isAuth

}