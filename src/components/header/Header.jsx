
/* export default function Header(props) {
    return (
        <header className="bg-primary text-white text-left p-3">
            <h1>My Website</h1>
            {props.userDetails}
        </header>
    )
} */

export default function Header({ userDetails }) {
    return (
        <header className="bg-primary text-white text-left p-3">
            <div className="d-flex justify-content-between">
                <h1>My Website</h1>
                {userDetails.name}
            </div>
        </header>
    )
}