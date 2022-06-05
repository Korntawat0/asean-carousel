export function countryContent(image) {
    return (
        <>
            {image.name === "Brunei" ? <div>This is Brunei.</div> : null}
            {image.name === "Cambodia" ? <div>This is Cambodia.</div> : null}
            {image.name === "Indonesia" ? <div>This is Indonesia.</div> : null}
            {image.name === "Laos" ? <div>This is Laos.</div> : null}
            {image.name === "Myanmar" ? <div>This is Myanmar.</div> : null}
            {image.name === "Malaysia" ? <div>This is Malaysia.</div> : null}
            {image.name === "Philippines" ? <div>This is Philippines.</div> : null}
            {image.name === "Singapore" ? <div>This is Singapore.</div> : null}
            {image.name === "Thailand" ? <div>This is Thailand.</div> : null}
            {image.name === "Vietnam" ? <div>This is Vietnam.</div> : null}
        </>
    )
}