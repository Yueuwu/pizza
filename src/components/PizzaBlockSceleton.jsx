import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="273" rx="7" ry="7" width="260" height="30" />
        <rect x="0" y="318" rx="7" ry="7" width="260" height="57" />
        <rect x="0" y="400" rx="7" ry="7" width="111" height="26" />
        <rect x="123" y="390" rx="24" ry="24" width="136" height="41" />
    </ContentLoader>
)

export default Sceleton