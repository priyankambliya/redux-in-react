import {useNavigate} from 'react-router-dom'

function UpadateAction({name,user}) {

  const navigate = useNavigate()

  return (
    <button onClick={()=>navigate('/update',{
      state:{
        user
      }
    })} type="button" class="btn btn-danger">{name}</button>
  )
}

export default UpadateAction
