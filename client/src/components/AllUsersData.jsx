import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "../../store/actions/postAction"
import DeleteAction from "./Buttons/DeleteAction"
import UpadateAction from "./Buttons/UpadateAction"

function AllUsersData() {
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state)
  console.log(Array.isArray(post.payload))

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  if(!post){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <>
      <h1 className="text-center">All users</h1>
      <div className="m-4 border rounded-3">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">Name</th>
              <th className="text-center" scope="col">Email</th>
              <th className="text-center" scope="col">Update</th>
              <th className="text-center" scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(post.payload) &&
              post.payload.map((postData) => {
                return <tr key={postData._id}>
                <td className="text-center">{postData.name}</td>
                <td className="text-center">{postData.email}</td>
                <td className="text-center"><UpadateAction {...{name:"Update",user:postData}}/></td>
                <td className="text-center"><DeleteAction {...{name:"Delete",userId:postData._id}}/></td>
              </tr> 
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllUsersData
