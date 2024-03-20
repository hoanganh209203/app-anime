import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import Login from "../components/user/login";
import Register from "../components/user/register";
export const CountCT = createContext([] as any) ;
const Layout = () => {
    // const [count , setCount] = useState(0)
    const reducer = (state:any,action:any) =>{
        switch(action.type){
            case 'login':
                return <Login/>
            break
            case 'register':
                return <Register/>
            default:
                return (<></>)
    }
    }
    //     slug: "/", title: "Trang Chủ"
    //   },
    //   {
    //     slug: "/products", title: "Product"
    //   },
    //   {
    //     slug: "/", title: "Thư Viện"
    //   },
    //   {
    //     slug: "/", title: "Top Anime"
    //   },
    //   {
    //     slug: "/", title: "Lịch Chiếu"
    //   },
    //   {
    //     slug: "/", title: "Đăng Nhập"
    //   },
    
    //   ];
    const [state, setState] = useReducer(reducer,(<></>));
    console.log(state);
    
    return (
        <>
        <CountCT.Provider value={[state,setState]}>
        <Header menu={[]}/>
            <Outlet/>
        <Footer/>
        </CountCT.Provider>
        </>
    )
}

export default Layout