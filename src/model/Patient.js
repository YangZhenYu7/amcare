/**
 * Created by yangzhenyu on 2017/7/20.
 */


let db =  require('../database/DataBase.js');
//     import DataBase from '../database/DataBase.js'

const reservation='0';
const diagnosing='1';
const diagnosed='2';

class Patient
{
    constructor() {
        this.name='uu';
        this.birthday='';
        this.phone='';
        this.gender='';
        this.carre_date='';
        this.state=reservation;
    }
}

class PatientLayer
{
    inserPatient(data) {
        // db.insertData('patients', JSON.stringify(data), (err)=>{
        // debugger;
        // });
    }

    getAllPatientsByState(state){

        db.getData('patients', state, (err, docs)=>{
            debugger;
        });
    }

    getAllPatientsByDate(date){
        return ;
    }

}

export {Patient, PatientLayer};