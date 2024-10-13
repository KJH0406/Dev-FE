import { Link, Outlet, useParams, useNavigate } from "react-router-dom"
import Header from "../Header.jsx"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteEvent, fetchEvent, queryClient } from "../../util/http"
import LoadingIndicator from "../UI/LoadingIndicator"
import ErrorBlock from "../UI/ErrorBlock"

export default function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 이벤트 세부 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    enabled: id !== undefined, // 이벤트 ID가 있을 때만 요청 실행
  })

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      }) // "events" 키의 쿼리 무효화 및 삭제된 페이지 재요청 방지
      navigate("/events") // 성공 시 /events로 리디렉션
    },
  })

  const onDelete = () => {
    mutate({ id })
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
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={onDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>
    </>
  )
}
