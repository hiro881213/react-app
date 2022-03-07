import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {

    // childrenを読み込む
    const { children } = props;

    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    
    return (
        <AdminFlagContext.Provider value = {{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    );

};
