import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { menu } from "../interface/product";

const Layout = () => {
    

    // const menu: menu[] = [{
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
    return (
        <div>
        <Header menu={[]}/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
        </div>

    )
}

export default Layout