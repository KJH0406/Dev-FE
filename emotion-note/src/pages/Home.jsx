import Header from "../components/Header"
import Button from "../components/Button"
import "../styles/Home.css"
import DiaryList from "../components/DiaryList"

const Home = () => {
  return (
    <div className="Home">
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  )
}

export default Home
