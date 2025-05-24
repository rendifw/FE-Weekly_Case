const Badge = ({difficulty, children}) => {

  return (
    <span className={`badge ${difficulty?.toLowerCase()}`}>
      {children}
    </span>
  )
}

export default Badge