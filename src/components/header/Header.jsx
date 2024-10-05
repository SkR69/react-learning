
/* export default function Header(props) {
    return (
        <header className="bg-primary text-white text-left p-3">
            <h1>My Website</h1>
            {props.userDetails}
        </header>
    )
} */

import Avatar from "../avatar/Avatar";

export default function Header({ userDetails }) {
    return (
        <header className="bg-primary text-white text-left p-3">
            <div className="d-flex justify-content-between">
                <h1>My Website</h1>
                <Avatar imageDetails={{url: userDetails.imageUrl, size: 50, desc : "Something went wrong", class:'rounded-circle'}} />
            </div>
        </header>
    )
}