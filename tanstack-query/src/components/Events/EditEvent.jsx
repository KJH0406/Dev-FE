import { Link, useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from "../UI/Modal.jsx"
import EventForm from "./EventForm.jsx"
import { fetchEvent, queryClient, updateEvent } from "../../util/http"
import LoadingIndicator from "../UI/LoadingIndicator"
import ErrorBlock from "../UI/ErrorBlock"

export default function EditEvent() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 이벤트 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    enabled: id !== undefined, // 이벤트 ID가 있을 때만 요청 실행
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,

    // 수정된 결과를 바로 반영
    onMutate: async (data) => {
      // 일단 데이터 실행 무효화(동기 함수 통해서 무효화 된다음에 아래 실행)
      await queryClient.cancelQueries({ queryKey: ["events", id] })
      // mutate를 통해 백엔드에서 업데이트된 데이터를 바로 가져옴.
      const newEvent = data.event

      // 업데이트 실패 시 기존 데이터로 롤백하기 위한 이전 데이터 저장
      const prevEvent = queryClient.getQueryData({ queryKey: ["events", id] })

      // setQueriesData는 두개의 인자를 필요로 함[쿼리 KEY, 새로운 데이터]
      // 해당 KEY에 대한 데이터 값을 바로 변경해 줌.
      queryClient.setQueriesData(["events", id], newEvent)

      // onError에서 사용할 수 있도록 리턴{context}
      return { prevEvent }
    },

    // 업데이트 실패 시 데이터 롤백
    onError: (error, data, context) => {
      queryClient.setQueriesData(["events", id], context.prevEvent)
    },

    // 백엔드와 데이터 싱크가 맞는지 지속적으로 확인
    onSettled: () => [
      queryClient.invalidateQueries({ queryKey: ["events", id] }),
    ],
  })

  function handleSubmit(formData) {
    // id를 통해서 이벤트를 찾고, 수정한 이벤트 데이터를 전송
    mutate({ id, event: formData })
  }

  function handleClose() {
    navigate("../")
  }

  // 로딩 상태 처리
  if (isLoading) {
    return <LoadingIndicator />
  }

  // 에러 처리
  if (isError) {
    return (
      <ErrorBlock
        title="Error"
        message={error?.message || "Failed to load event details"}
      />
    )
  }

  // 데이터가 없을 경우 기본값 설정
  if (!data) {
    return <p>No event found!</p>
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  )
}
