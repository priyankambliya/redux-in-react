import { useRef } from "react"
import { createUser } from "../../store/actions/postAction"
import { useDispatch } from "react-redux"

function AllUsers() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()

  const handleAddEventListner = (e) => {
    e.preventDefault()
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    dispatch(createUser(user))
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100%">
        <div className="w-50  border rounded-2 p-5">
          <h1 className="h1 text-center mb-10">Add users</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="email"
              ref={nameRef}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="email"
              ref={passwordRef}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <button
            onClick={handleAddEventListner}
            className="btn btn-primary m-auto d-flex px-4 mt-4"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllUsers
