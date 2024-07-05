import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

// type TAntPath = {
//     key: string;
//     label: ReactNode;
//     children?: TAntPath[];
// };

// type TReactRoute = {
//     path: string;
//     element: ReactNode;
// }
export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [{
            name: 'Academic Semester',
            path: 'academic-semester',
            element: <AcademicSemester />
        }]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    }
]

// export const adminRoutes = adminPaths.reduce((acc: TReactRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         });
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// }, [])

// export const adminSidebarRoutes = adminPaths.reduce((acc: TAntPath[], val) => {
//     if (!val['children']) {
//         acc.push({
//             key: val.name,
//             label: <NavLink to={`/admin/${val.path}`}>{val.name}</NavLink>
//         })
//     } else {
//         acc.push({
//             key: val.name,
//             label: val.name,
//             // children: val.children.reduce((initialState: TAntPath[], child) => {
//             //     initialState.push({
//             //         key: child.name,
//             //         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//             //     })
//             //     return initialState
//             // }, [])
//             children: val.children.map((child) => {
//                 return ({
//                     key: child.name,
//                     label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//                 })
//             })
//         })
//     }
//     return acc;
// }, [])

//^ hard coded way
// export const adminPaths = [
//     {
//         // path: 'dashboard',
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin />
//     }
// ]