import { useContext } from "react";

import { AdminFlagContext } from "./components/chap7_child/providers/AdminFlagProvider";  
import { Card } from "./components/chap7_child/Card"

export const Page4 = () => {

    // 管理者フラグ
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    // [切り替え]押下時
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <>
            <div>
                {
                    isAdmin ? 
                        <span>管理者です</span> : <span>管理者以外です</span>
                }

                <button onClick = {onClickSwitch}>切り替え</button>
                <Card isAdmin = {isAdmin} />
            </div>

            <a href = '../Page3'>戻る</a>
        </>
    );

}