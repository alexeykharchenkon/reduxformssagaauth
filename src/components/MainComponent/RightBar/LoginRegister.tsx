import { Card } from '@material-ui/core';
import { User } from "@common/types";
import { LOGIN_FORM_ACTIVE, REGISTER_FORM_ACTIVE } from "@common/types/states";
import { LoginRegisterSwitcher, LoginForm, RegisterForm } from "@components/MainComponent";
import { memo } from 'react';

interface LoginRegisterProps {
    loginSubmit: (values: any) => void;
    registerSubmit: (values: any) => void;
    loginFormChange: (type: string) => void;
    user: User;
    logState: string;
    logout: () => void;
}

export const LoginRegister = memo(({ loginSubmit, registerSubmit, user, 
    loginFormChange, logState, logout }: LoginRegisterProps) => {
    return (
        <Card className="form_component">
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
});