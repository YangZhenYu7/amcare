/**
 * Created by yangzhenyu on 2017/7/20.
 */

import ReservateInfo from '../page/reservation/ReservateInfo';
import ReservaterCall from '../page/reservation/ReservaterCall'
import AccountInfo from '../page/acount/AccountInfo';
import Unspport from '../page/Unspport';
import About from '../page/acount/About';
import DrugQuery from '../page/drug/DrugQuery';
import DrugAdd from '../page/drug/DrugAdd';
import ClinicInfo from '../page/clinic/ClinicInfo';
import PatientDiagnoseAll from '../page/diagnose/PatientDiagnoseAll';
import PatientDiagnoseToday from '../page/diagnose/PatientDiagnoseToday';
import PatientDiagnoseHistory from '../page/diagnose/PatientDiagnoseHistory';

class ContentRouter
{
    static router={"0":[ReservateInfo, ReservaterCall]
                    , '1':[PatientDiagnoseAll, PatientDiagnoseToday, PatientDiagnoseHistory]
                    , '2':[ClinicInfo]
                    , '4':[DrugQuery, DrugAdd]
                    , '6':[AccountInfo, About]}

    static getContentPage(category, type) {
        let pages = this.router[category];
        if (pages) {
            return pages[type] || Unspport;
        } else {
            return Unspport;
        }
    }
}

export default ContentRouter;