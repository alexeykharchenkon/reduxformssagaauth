import { Field, reduxForm, InjectedFormProps, reset } from 'redux-form';
import { Typography, Card } from '@material-ui/core';

const resetForm = (result: any, dispatch: any) => dispatch(reset('postForm'));

const validate = (values: any) => {
    const errors = {title: '', text: ''};
  
    if(!values.title) errors.title = 'Is Required!';
    if(!values.text) errors.text = 'Is Required!';
  
    return errors;
}

const warn = (values: any) => {
    const warnings = {}
    return warnings
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

  const renderTextarea = ({textarea, label, meta: { touched, error, warning }}: any) => (
    <div>
        <label htmlFor="text">
            <Typography variant="subtitle1" gutterBottom>{label}</Typography>
        </label>
      <div>
        <Field name="text" component="textarea" placeholder={label} className="post_form_textarea"/>
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const Form = ({ handleSubmit, reset, initialized }: InjectedFormProps) => {
    return (
        <Card className="form_component">
            <Typography variant="h5" gutterBottom>
                Post Form
             </Typography>
            <form onSubmit={handleSubmit} className="form">
                <Field name="id" component="input" hidden /> 
                <Field name="title" type="text" component={renderField} label="Title"/>
                <Field name="text" component={renderTextarea} label="Text"/>
                <div className="form_buttons">
                    <button type="button" onClick={reset}>
                        Reset
                    </button>
                    <button type="submit">
                        {!initialized && <span>Add Post</span>}
                        {initialized && <span>Save Post</span>}   
                    </button>
                </div>
            </form>
        </Card>
    );
}

export const PostForm = reduxForm({
    form: 'postForm', 
    onSubmitSuccess: resetForm,
    validate, 
    warn
})(Form);