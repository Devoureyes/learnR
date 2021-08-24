import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Textarea} from "../../commons/formControls/FormControls";
import {reduxForm} from "redux-form";

let ProfileDataForm = ({handleSubmit,profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <p className={s.name}>{createField('Full Name','fullName',[],'input')}</p>
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