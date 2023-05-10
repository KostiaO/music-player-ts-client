import { useQuery } from 'react-query';
import { authLogin } from '../../Queries/Auth/authLogin';

export const useAuthLogin = (postData: any) => {
    const { data, error, isLoading, isRefetching, refetch } = useQuery({
        queryKey: 'authLogin',
        queryFn: () => authLogin(postData),
        retry: false,
        enabled: false
    });

    return {
        loginData: data,
        loginError: error,
        loginLoading: isLoading || isRefetching,
        loginFetch: refetch
    };
}