/**
 * Created by yangzhenyu on 2017/7/20.
 */

import ReservateInfo from '../page/ReservateInfo';
import AccountInfo from '../page/AccountInfo';
import Unspport from '../page/Unspport';
import About from '../page/About';
import DrugQuery from '../page/DrugQuery';
import DrugAdd from '../page/DrugAdd';
import ClinicInfo from '../page/ClinicInfo';
import PatientManage from '../page/PatientManage';

class ContentRouter
{
    static router={"0":[ReservateInfo, PatientManage]
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