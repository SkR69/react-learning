import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Sidebar from "../../components/sidebar/Sidebar"
import Avatar from "../../components/avatar/Avatar";

export default function Home() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        inventionList: ['Invent new traffic lights', 'Rehearse a movie scene', 'Improve the spectrum technology']
    }
    const inventionList = user.inventionList.map((invention, index) => <li key={index}>{invention}</li>);
    
    const today = new Date();

    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
          ).format(date);
    }

    return (
        <div className="container-fluid px-0">
            <Header userDetails = {user}/>
            <div className="d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <main>
                    <h1>To Do List for {formatDate(today)}</h1>
                        <h1>{user.name}'s Todos</h1>
                        <Avatar imageDetails={{url: user.imageUrl, size: 50, desc : "Something went wrong"}} />
                        <ul>
                            {
                                user.inventionList.map((invention, index) => <li key={index}>{invention}</li>)
                            }
                            {
                                inventionList
                            }
                        </ul>
                    </main>
                </div>
            </div>
            <Footer />
        </div>

    )
}