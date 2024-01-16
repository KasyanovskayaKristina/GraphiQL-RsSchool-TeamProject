import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type PrivateRouteProps = {
  children: React.ReactNode;
  condition: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, condition }) => {
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
