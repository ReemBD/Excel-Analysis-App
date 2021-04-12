import { ExcelTable } from "pages/ExcelTable";
import { FoodAnalysisApp } from "pages/FoodAnalysisApp";
import { MyExcels } from "pages/MyExcels";
import { Data } from 'pages/Data'
import { ExcelDetails } from "pages/ExcelDetails";

export const routes = [
    {
        key: 'akmlk4fr90ifrepfk',
        path: '/excel/:id',
        component: ExcelDetails
    },
    {
        key: 'cso49fpmn94jdslsn',
        path: '/data',
        component: Data

    },
    {
        key: 'mk4lt090ap2',
        path: '/table/:id',
        component: ExcelTable
    },
    {
        key: '23mkls0o4lz;',
        path: '/table',
        component: MyExcels
    },
    {
        key: 'alm23rsasfaw3',
        path: '/',
        component: FoodAnalysisApp
    }
]
