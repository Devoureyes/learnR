import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../commons/formControls/FormControls";
import {reduxForm} from "redux-form";

let ProfileDataForm = ({handleSubmit,contacts}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <b>Contacts: {Object.keys(contacts).map(key => {
            return <div key={key}>
                <b>{key}:</b> {createField(key,'contacts.'+key,[],Input)}
            </div>
        })}</b>
        <div className={s.name}><b>Full Name: </b>{createField('Full Name','fullName',[],'input')}</div>
        <b>Looking for a job: </b>{createField('','lookingForAJob',[],'input',{type: 'checkbox'})}
        <div><b>My professional skills:</b>
            {createField('My professional skills','lookingForAJobDescription',[],Textarea)}
        </div>
        <div>
            <b>About me:</b>{createField('About me','aboutMe',[],Textarea)}
        </div>
    </form>
}

ProfileDataForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataForm;