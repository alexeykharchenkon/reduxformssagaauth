import { Typography } from '@material-ui/core';
import { LOGIN_FORM_ACTIVE, REGISTER_FORM_ACTIVE} from "@common/types/states";
import { User } from '@common/types';
import { USER_FORM_ACTIVE } from '../../common/types/states';

interface RightBarProps {
    loginFormChange: any;
    logState: any;
    logout: any;
    user: User;
}

export const LoginRegisterSwitcher = ({ loginFormChange, logState, logout, user }: RightBarProps) => {
    return (
        <div className="login_register_switch">
            {logState === USER_FORM_ACTIVE &&
                <div>
                    <Typography variant="subtitle1" gutterBottom>
                         Account <strong>{user.login}</strong>    
                    </Typography>
                    <button  type="button" onClick={() => logout()}>
                        <Typography variant="subtitle1">Log out</Typography>
                    </button> 
                </div>
            }
            {logState !== USER_FORM_ACTIVE &&
                <div>
                    <button 
                        type="button" 
                        onClick={() => loginFormChange(LOGIN_FORM_ACTIVE)}
                    >
                        <Typography variant="subtitle1">Sing in</Typography>
                    </button>
                    <button 
                        type="button"
                        onClick={() => loginFormChange(REGISTER_FORM_ACTIVE)}
                    >
                        <Typography variant="subtitle1">Sing up</Typography>
                    </button>
                </div>
            }
        </div>
    );
}