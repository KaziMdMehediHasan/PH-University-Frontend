import { NavLink } from "react-router-dom";
import { TSidebarPath, TUserPath } from "../types";

export const sidebarItemsGenerator = (paths: TUserPath[], role) => {
    const sidebarItems = paths.reduce((acc: TSidebarPath[], val) => {
        if (!val['children']) {
            acc.push({
                key: val.name,
                label: <NavLink to={`/${role}/${val.path}`}> {val.name} </NavLink>
            })
        } else {
            acc.push({
                key: val.name,
                label: val.name,
                children: val.children.map((child) => {
                    return ({
                        key: child.name,
                        label: <NavLink to={`/${role}/${child.path}`}> {child.name} </NavLink>
                    })
                })
            })
        }
        return acc;
    }, [])
    return sidebarItems;
}
