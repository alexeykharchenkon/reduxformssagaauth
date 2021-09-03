import { Card } from '@material-ui/core';
import { User } from "@common/types";
import { PostForm, LoginRegister} from "@components/MainComponent";

interface RightBarProps {
    handleSubmit: (values: any) => void;
    loginSubmit: (values: any) => void;
    registerSubmit: (values: any) => void;
    loginFormChange: (type: string) => void;
    user: User;
    logState: string;
    logout: () => void;
}

export const RightBar = ({ handleSubmit, loginSubmit, registerSubmit, user, 
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
}