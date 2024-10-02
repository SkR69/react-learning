import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Home() {
    return (
        <div className="container-fluid px-0">
        <Header />
        <div className="d-flex">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <main>
                    <h2>Main Content Area</h2>
                    <p>This is where your main content goes.</p>
                </main>
            </div>
        </div>
        <Footer />
    </div>

    )
}