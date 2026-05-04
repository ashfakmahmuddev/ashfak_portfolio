
const Container = ({className, children}) => {
  return (
    <div className={`max-w-330 mx-auto px-3 lg:px-0 ${className}`}>{children}</div>
  )
} 

export default Container