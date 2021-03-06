import React from 'react';
import s from './formControls.module.css'
import {Field} from "redux-form";

export const FormControl = ({input, meta, ...props}) => (
    <div className={meta.error ? s.formControl : s.formControlError}>
        <div>{props.children}</div>
        {meta.touched && ((meta.error && <span className={s.span}>{meta.error}</span>)
            || (meta.warning && <span className={s.span}>{meta.warning}</span>))}
    </div>)

export const Input = props => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
};
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>)
export const Textarea = ({input, placeholder, meta: {touched, error, warning}}) => (<div>
    <div className={s.textarea}>
        <textarea {...input} placeholder={placeholder} className={(touched && error && s.error) || undefined}/>
        {touched && ((error && <span className={s.span}>{error}</span>) || (warning &&
            <span className={s.span}>{warning}</span>))}
    </div>
</div>);


export const loginInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input {...input} placeholder={label} className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning &&
            <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);
export const passwordInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input type={'password'} {...input} placeholder={label}
               className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning &&
            <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);

export const loginGitInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input {...input} placeholder={label} className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning &&
            <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);

export const tokenGitInput = ({input, label, meta: {touched, error, warning}}) => (<div>
    <div className={s.login}>
        <label>{label}</label>
        <input type={'text'} {...input} placeholder={label}
               className={s.loginInput + ' ' + (touched && error && s.errorLogin)}/>
        {touched && ((error && <span className={s.spanLogin}>{error}</span>) || (warning &&
            <span className={s.spanLogin}>{warning}</span>))}
    </div>
</div>);



