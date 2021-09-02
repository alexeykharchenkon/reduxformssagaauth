import '@styles/index.css';
import { User } from '@common/types';

interface AppProps {
  user: User;
}

export const ProfileComponent = ({ user }: AppProps) => {
  return (
      <div className="app">
        <div>Welcome {user?.login}</div>
          
      </div>
  );
}