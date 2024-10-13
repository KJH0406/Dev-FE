// interface는 단순히 객체의 타입을 정의할 때 적합
// class는 데이터 구조뿐만 아니라 해당 객체의 동작(메서드)을 포함하는 경우에 적합

class Todo {
  id: string
  text: string

  constructor(todoText: string) {
    this.id = new Date().toISOString()
    this.text = todoText
  }
}

export default Todo
