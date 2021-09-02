import { Card } from '@material-ui/core';
import { User } from "@common/types";
import { PostForm, LoginRegister} from "@components/MainComponent";

interface RightBarProps {
    handleSubmit: any;
    loginSubmit: any;
    registerSubmit: any;
    loginFormChange: any;
    user: User;
    logState: any;
    logout: any;
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