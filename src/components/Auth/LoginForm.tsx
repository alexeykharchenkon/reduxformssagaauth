import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const validate = (values: any) => {
    const errors = {login: '', password: ''};
  
    if(!values.login) errors.login = 'Is Required!';
    if(!values.password) errors.password = 'Is Required!';
  
    return errors;
}

const warn = (values: any) => {
    const warnings = {};
    return warnings;
  }

const renderField = ({input, label, type, meta: { touched, error, warning }}: any) => (
    <div>
        <label htmlFor="text">
            <Typography variant="subtitle1" gutterBottom>{label}</Typography>
        </label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const Form = ({ handleSubmit, reset }: InjectedFormProps) => {
    return (
        <Card className="form_component">
            <Typography variant="h5" gutterBottom>
                Login
             </Typography>
            <form onSubmit={handleSubmit} className="form">
                <Field name="id" component="input" hidden /> 
                <Field name="login" type="text" component={renderField} label="Login"/>
                <Field name="password" type="password" component={renderField} label="Password"/>
                <div className="form_buttons">
                    <button type="submit">
                        <Typography variant="button" display="block" gutterBottom>
                            Login
                        </Typography>
                    </button>
                </div>
            </form>
        </Card>
    );
}

export const LoginForm = reduxForm({form: 'loginForm', validate, warn})(Form);