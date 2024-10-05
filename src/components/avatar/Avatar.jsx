export default function Avatar({ imageDetails }) {
    return (
        <img
            src={imageDetails.url}
            alt={imageDetails.desc}
            className={`photo ${imageDetails?.class}`}
            height={imageDetails.size}
            width={imageDetails.size}
        />
    )
}