/**
 * Created by yangzhenyu on 2017/7/20.
 */


let db = require('../database/DataBase.js');

export const PatientKeyID="id";
export const PatientKeyIDTemp='idTemp';
export const PatientKeyName='name';
export const PatientKeyBirthday='birthday';
export const PatientKeyPhone='phone';
export const PatientKeyGender='gender';
export const PatientKeyDoctor='doctor';
export const PatientKeyCareDate='carre_date';
export const PatientKeyState='state';

export const reservation='0';
export const diagnosing='1';
export const diagnosed='2';

export class Patient
{
    constructor() {
        this[PatientKeyID]=0;
        this[PatientKeyIDTemp]=0;
        this[PatientKeyName]='uu';
        this[PatientKeyBirthday]='';
        this[PatientKeyPhone]='';
        this[PatientKeyGender]='male';
        this[PatientKeyCareDate]='';
        this[PatientKeyDoctor]='';
        this[PatientKeyState]=reservation;
    }
}

export class PatientLayer
{
    getCurID() {

    }

    inserPatient(data, cb) {
        if (!data[PatientKeyID]) {
            data[PatientKeyID] = db.getDataCount('patients')+1;
        }


        db.insertData('patients', data, (err)=>{
            cb && cb(err);
        });
    }

    deletePatient(data, cb) {
        db.deleteData('patients', data, (err)=>{
            cb && cb(err);
        });
    }

    getAllPatientsByState(state, cb){
        db.getData('patients', (docs)=>{
            cb && cb(docs);
        });
    }

    getAllPatientsByDate(date){
        return ;
    }

}