import { Grid,TableContainer,Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Component } from "react";


class List extends Component{
    
  state = {
    userList: []
  }
  
  /* mouting  */
  componentDidMount() {
    this.getUsersData()
  }
    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({ userList: data })
        //console.log(this.state.userList)
      }
render(){
    return(
        <>
        <center>
            <div className="container mt-3">
            <h2>List class component, mouting phase using componentdidmount</h2>
            <Grid container>
                 <Grid item xs={12}>
                 {
                  this.state.userList && this.state.userList.length > 0 ?(
                     <TableContainer >
                         <Table>
                            <TableHead>
                                <TableRow  >
                                    <TableCell className="fs-5 fw-bold">id</TableCell>
                                    <TableCell className="fs-5 fw-bold">name</TableCell>
                                    <TableCell className="fs-5 fw-bold">username</TableCell>
                                    <TableCell className="fs-5 fw-bold">email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                               {this.state.userList.map((list)=>(
                                
                                <TableRow key={list.id}>
                                    <TableCell>name{list.id}</TableCell>
                                    <TableCell>{list.name}</TableCell>
                                    <TableCell>{list.username}</TableCell>
                                    <TableCell>{list.email}</TableCell>
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
    
}
export default List;