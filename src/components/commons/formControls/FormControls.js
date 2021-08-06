import React from 'react';
import s from './formControls.module.css'

export const FormControl = ({input,meta,...props}) => (<div className={s.formControl}>
        <div>{props.children}</div>
    {meta.touched && ((meta.error && <span className={s.span}>{meta.error}</span>) || (meta.warning && <span className={s.span}>{meta.warning}</span>))}
    </div>)

export const TexareaTest = props => {
    const {input,meta,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}


export const Textarea = ({input, placeholder, meta: {touched, error, warning}}) => (<div>
    <div className={s.textarea}>
        <textarea {...input}placeholder={placeholder} className={touched && error && s.error}/>
        {touched && ((error && <span className={s.span}>{error}</span>) || (warning && <span className={s.span}>{warning}</span>))}
    </div>
</div>);

export const loginInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input {...input} placeholder={label} className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning && <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);
export const passwordInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input type={'password'} {...input} placeholder={label} className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning && <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);



