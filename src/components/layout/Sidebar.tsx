import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { studentPaths } from '../../routes/student.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/Features/auth/authSlice';

const { Sider } = Layout;

const Sidebar = () => {
    const userRole = {
        ADMIN: 'admin',
        FACULTY: 'faculty',
        STUDENT: 'student'
    }

    // const role = 'faculty';
    const user = useAppSelector(selectCurrentUser);
    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{
                color: "white",
                height: '4rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1 style={{ height: '20px' }}>PH University</h1>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems}
            />
        </Sider>
    )
}

export default Sidebar