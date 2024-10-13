import { Link, useNavigate } from "react-router-dom"

import Modal from "../UI/Modal.jsx"
import EventForm from "./EventForm.jsx"
import { useMutation } from "@tanstack/react-query"
import { createNewEvent, queryClient } from "../../util/http"
import ErrorBlock from "../UI/ErrorBlock"

export default function NewEvent() {
  const navigate = useNavigate()

  // mutate = 요청 함수
  const { mutate, isPending, isError, error } = useMutation({
    // Fn: 실행 함수
    mutationFn: createNewEvent,

    // 요청이 성공적일 때 실행할 함수
    onSuccess: () => {
      // 새로운 이벤트가 생성되었을 때, 기존에 가져온 데이터가 만료되었으니 다시 신규로 가져와야함을 요청함.
      queryClient.invalidateQueries()
      navigate("/events")
    },
  })

  function handleSubmit(formData) {
    // 제출할 때 mutate 요청에 formData 전달
    mutate({ event: formData })
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {/* 요청 처리중일 때(Pending) */}
        {isPending && "Submitting..."}

        {/* 요청 처리중이지 않을때 */}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={error.info?.message || "Failed to create event"}
        />
      )}
    </Modal>
  )
}
