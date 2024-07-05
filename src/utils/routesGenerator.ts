import { TReactRoute, TUserPath } from "../types";

export const routeGenerator = (path: TUserPath[]) => {
    const routes = path.reduce((acc: TReactRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            });
        }
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!, //~ ! means not null assertion
                    element: child.element
                })
            })
        }
        return acc;
    }, [])

    return routes
}