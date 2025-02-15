import { useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

import { useEffect } from "react"

// components
import { Test } from "../components"

function Quiz() {
  const { title } = useParams()
  const { data: quizzes, isPending, error } =
    useFetch(`http://localhost:3000/quizzes?title=${title}`)
    // useFetch(`https://json-api.uz/api/project/LzkhamrakulovFrontentQuiz/quizzes?title=${title}`)
  

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title])
  return (
    <section className="quiz-container container">
      {isPending && <div>Loading...</div>}
      {error && <p>{error}</p>}
      {quizzes && <Test questions={quizzes[0]} />}
      {/* {quizzes && <Test questions={quizzes.data[0]} />} */}
    </section>
  )
}

export default Quiz
