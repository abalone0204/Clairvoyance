 export default function checkName(web_name, db_name) {
     if ('string' !== typeof(db_name)) {
         return false;
     }
     // 先比對一次
     if (web_name.indexOf(db_name) >= 0) {
         return true;
     }

     // 如果不是 "公司" 結尾的(Ex: 宏達國際電子股份有限公司桃園廠), 只判斷到公司
     if (db_name.match('公司') && !db_name.match('公司$')) {
         if (web_name.indexOf(db_name.match('(^.*公司)')[1]) >= 0) {
             return true;
         }
     }

     // 處理 "吳美玉(即玉皇手作茶飲店)" 格式
     if (db_name.match('.*\\(即.*\\)')) {
         if (web_name.indexOf(db_name.match('.*\\(即(.*)\\)')[1]) >= 0) {
             return true;
         }
     }

     // 處理 高雄市私立新東海老人養護中心
     if (db_name.match('.*私立(.*)')) {
         if (web_name.indexOf(db_name.match('.*私立(.*)')[1]) >= 0) {
             return true;
         }
     }
     return false;
 };