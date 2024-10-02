export default function Avatar({ imageDetails }) {
    return (
        <img
            src={imageDetails.url}
            alt={imageDetails.desc}
            className="photo"
            height={imageDetails.size}
            width={imageDetails.size}
        />
    )
}