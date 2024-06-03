import { Grid,TableContainer,Table, TableHead,TableCell,TableRow,TableBody} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../../Redux/ListsSlice"


const RLists =()=>{
    const [lists,setLists]=useState({})
    const dispathc=useDispatch()
    //console.log('list',lists)
    useEffect(()=>{
        getLists()
    },[])

    const getLists = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
           // console.log('data', response.data)
            setLists(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    const addldlist=(lists)=>{
        console.log('addlist clikcked')
        dispathc(add(lists))
    }
    return(
        <>
        <center>
            <div className="container mt-3">
            <h2>List function component </h2>
            <Grid container>
                 <Grid item xs={12}>
                 {
                  lists && lists.length > 0 ?(
                     <TableContainer >
                         <Table>
                            <TableHead>
                                <TableRow  >
                                    <TableCell className="fs-5 fw-bold">id</TableCell>
                                    <TableCell className="fs-5 fw-bold">name</TableCell>
                                    <TableCell className="fs-5 fw-bold">username</TableCell>
                                    <TableCell className="fs-5 fw-bold">email</TableCell>
                                    <TableCell className="fs-5 fw-bold">action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                               {lists.map((list)=>(
                                
                                <TableRow key={list.id}>
                                    <TableCell>name{list.id}</TableCell>
                                    <TableCell>{list.name}</TableCell>
                                    <TableCell>{list.username}</TableCell>
                                    <TableCell>{list.email}</TableCell>
                                    <TableCell><button className="btn btn-primary" onClick={()=>addldlist(list)}>add</button></TableCell>
                                    
                                  
                                </TableRow>
                               ))
                               }
                                        
                            </TableBody>
                        </Table>
                    </TableContainer>
                       ):<h3>loading...</h3>
                    }
                </Grid>
            </Grid>
            </div>
        </center>
        </>
    )
}
export default RLists