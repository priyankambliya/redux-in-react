import { useDispatch } from "react-redux"
import { deleteUser } from "../../../store/actions/postAction"

function DeleteAction({name,userId}) {

  const dispatch = useDispatch()

  const handleDeleteAction = async (e,id) => {
    e.preventDefault()

    dispatch(deleteUser(id))
  }

  return (
    <button onClick={(e)=>handleDeleteAction(e,userId)} type="button" class="btn btn-danger">{name}</button>
  )
}

export default DeleteAction
