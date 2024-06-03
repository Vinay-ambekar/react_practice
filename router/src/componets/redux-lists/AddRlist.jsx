import { useDispatch, useSelector } from "react-redux";/* to get data from store */
import { remove } from '../../Redux/ListsSlice'

const AddRlist =()=>{
    const listdata=useSelector((state)=>state.lists)
    const dispatch=useDispatch()
    console.log('addlists:',listdata)

    const handelRemove=(list)=>{
        dispatch(remove(list))
    }
    return(
        <>
        <h2>Added from function list</h2>
        <table className="table">
    
        {listdata && listdata.length > 0 ? 
        listdata.map((list,index)=>(
            <>
            <tbody>
            <tr>
                <td className="w-25">{index+1}</td>
                <td className="w-25">{list.name}</td>
                <td className="w-25">{list.email}</td>
                <td className="w-25"><button className="btn btn-danger" onClick={()=>{handelRemove(list.id)}}>remove</button></td>
            </tr>
            </tbody>
                 </>
        )):<p>Empty...</p>
        
    }
        </table>
   

        </>
    )
}
export default AddRlist;