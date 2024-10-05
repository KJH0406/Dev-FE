const Button = ({ text }) => {
  const onClickButton = () => {
    console.log("버튼 클릭")
  }

  return <button onClick={onClickButton}>{text}</button>
}

export default Button
