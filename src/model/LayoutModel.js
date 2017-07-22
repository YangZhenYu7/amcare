/**
 * Created by yangzhenyu on 2017/7/19.
 */

let db =  require('../database/DataBase.js');
class LayoutModel
{
    static HeaderData = ["护士站", "诊断中心", "诊所管理", "收费退款", "进销存", "财务报表","其他"];
    static SiderData = {"0": ["挂号操作", "患者叫号"]
                        ,"1": ["今日诊断", "历史诊断"]
                        ,"2": ["诊所信息", "人员管理", "挂号管理", "病例库", "打印设置"]
                        ,"3": ['收费退款', '发药']
                        ,"4": ['药品查询', '添加药品']
                        ,"5": ['常规统计']
                        ,'6': ["账号信息",'关于']};
    static FooterData = 'AMCare Design ©2016 Created by Yzy'
}

export default LayoutModel;