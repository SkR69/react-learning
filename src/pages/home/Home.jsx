import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Sidebar from "../../components/sidebar/Sidebar"
import Avatar from "../../components/avatar/Avatar";
import './Home.css';
import Courosel from "../../components/courosel/courosel";


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    inventionList: ['Invent new traffic lights', 'Rehearse a movie scene', 'Improve the spectrum technology']
}
const inventionList = user.inventionList.map((invention, index) => <li key={index}>{invention}</li>);


function Item({ name, isPacked }) {
    return (
        isPacked ? <li className="item">{name} ✅</li> : <li className="item">{name}</li>
    )
}

function Card({ children }) {
    return (
        <div className="card mt-4">
            {children}
        </div>
    )
}

function Button({ children, message }) {
    return (
        <button className="btn btn-primary" onClick={() => handleClick(message)}>
            {children}
        </button>
    )
}


function PlayMovie({ name }) {

    function handleClick() {
        alert("movie" + name)
    }

    return (
        <Newbutton onClick={handleClick}>
            PlayMovie
        </Newbutton>
    )
}

function UploadImage() {
    return (
        <Newbutton onClick={() => alert("you have clicked upload image")}>
            Upload
        </Newbutton>
    )
}

function Newbutton({ onClick, children }) {
    return (
        <button className="btn btn-info" onClick={onClick}>
            {children}
        </button>
    )
}

function handleClick(message) {
    alert(message);
}

function handle() {
    alert("yu")
}

export default function Home() {
    return (
        <div className="container-fluid px-0 height">
            <Header userDetails={user} />
            <div className="d-flex h-100 m-2">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <main>
                        {/* <h1>To Do List for {formatDate(today)}</h1> */}
                        <h1>{user.name}'s Todos</h1>
                        <Card>
                            <div className="m-2">
                                <Avatar imageDetails={{ url: user.imageUrl, size: 50, desc: "Something went wrong", class: 'rounded' }} />
                            </div>
                            <ul>
                                {
                                    user.inventionList.map((invention, index) => <li key={index}>{invention}</li>)
                                }
                                {
                                    inventionList
                                }
                            </ul>
                        </Card>
                        <Card>
                            <section>
                                <h4 className="text-center">Implementing Conditional Rendering</h4>
                                <ul className="mt-2">
                                    <Item
                                        isPacked={true}
                                        name="Space suit"
                                    />
                                    <Item
                                        isPacked={true}
                                        name="Helmet with a golden leaf"
                                    />
                                    <Item
                                        isPacked={false}
                                        name="Photo of Tam"
                                    />
                                </ul>
                            </section>
                        </Card>

                        <Card>
                            <h4 className="text-center">Implementing Button Action</h4>
                            <div className="d-flex justify-content-around my-3">
                                <button className="btn btn-success" onClick={handle}>click me</button>

                                <Button message="Good Morning">
                                    Greeting
                                </Button>
                                <PlayMovie name="ega"></PlayMovie>

                                <Button message="You have clicked the button">
                                    Alert
                                </Button>


                                <UploadImage></UploadImage>
                            </div>
                        </Card>
                        <Card>
                            <h4 className="text-center">Implementing Courosel</h4>
                            <Courosel />
                        </Card>
                    </main>
                </div>
            </div>
            <Footer />
        </div>

    )
}