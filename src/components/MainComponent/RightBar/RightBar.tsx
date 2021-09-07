import { Card } from '@material-ui/core';
import { User } from "@common/types";
import { PostForm, LoginRegister} from "@components/MainComponent";
import { memo } from 'react';

interface RightBarProps {
    handleSubmit: (values: any) => void;
    loginSubmit: (values: any) => void;
    registerSubmit: (values: any) => void;
    loginFormChange: (type: string) => void;
    logout: () => void;
    user: User;
    logState: string;
}

export const RightBar = memo(({ handleSubmit, loginSubmit, registerSubmit, user, 
    loginFormChange, logState, logout }: RightBarProps) => {
    return (
        <Card className="rightbar_component">
            <LoginRegister
                loginSubmit={loginSubmit}
                registerSubmit={registerSubmit}
                loginFormChange={loginFormChange}
                user={user}
                logState={logState}
                logout={logout}
            />
           <PostForm onSubmit={handleSubmit} />
        </Card>
    );
});