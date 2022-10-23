import React from "react"
import ContentLoader from "react-content-loader" // Установить библиотеку  

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={342}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="128" cy="123" r="117" /> 
    <rect x="5" y="290" rx="10" ry="10" width="243" height="76" /> 
    <rect x="16" y="379" rx="10" ry="10" width="80" height="24" /> 
    <rect x="128" y="379" rx="10" ry="10" width="115" height="47" /> 
    <rect x="5" y="257" rx="10" ry="10" width="240" height="23" />
  </ContentLoader>
)

export default Skeleton
