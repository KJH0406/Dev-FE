import "../styles/Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>
        {new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </h1>
    </div>
  )
}

export default Header
