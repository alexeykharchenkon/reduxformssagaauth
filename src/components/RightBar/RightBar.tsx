import { Card } from '@material-ui/core';
import { User } from "@common/types";
import { LoginForm, RegisterForm } from "@components/Auth";
import { LOGIN_FORM_ACTIVE, REGISTER_FORM_ACTIVE } from "@common/types/states";
import { PostForm } from "@components/PostForm/PostForm";
import { LoginRegisterSwitcher } from './LoginRegisterSwitcher';

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
           <PostForm onSubmit={handleSubmit} />
    
           {logState === LOGIN_FORM_ACTIVE && <LoginForm onSubmit={loginSubmit}/>}
           {logState === REGISTER_FORM_ACTIVE && <RegisterForm onSubmit={registerSubmit}/>}
            
            <LoginRegisterSwitcher 
                loginFormChange={loginFormChange}
                logState={logState}
                logout={logout}
                user={user}
            />   
        </Card>
    );
}