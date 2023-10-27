import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { updateUser } from "../../store/actions/postAction"
import { useDispatch } from "react-redux"

function UpdateUser() {

  const location = useLocation()
  const user = location.state.user
  const [userObject, setUserObject] = useState(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setUserObject({
      ...userObject,
      [name]: value,
    })
  }

  const handleUpdateAction = async () => {
    // update the user in database here
    dispatch(updateUser(user._id,{
      name:userObject.name,
      email:userObject.email
    }))
    navigate('/users')
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
              type="name"
              value={userObject.name}
              name="name"
              onChange={handleChange}
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
              value={userObject.email}
              name="email"
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <button
            onClick={handleUpdateAction}
            className="btn btn-primary m-auto d-flex px-4 mt-4"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser
