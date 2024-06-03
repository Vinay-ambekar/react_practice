import { Grid ,Avatar} from "@mui/material";
import { Component } from "react";


class PaginationClassComp extends Component{
    state = {
        usersData: [],
        pageNumber: 0
      }
      
  componentDidMount() {
    this.getUsersData()
  }
      getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
          {
            method: 'GET',
            headers: {
              "app-id": '633e33e98efd49504c9c7643'
            }
          }
        )
        const { data } = await response.json()
        this.setState({ usersData: data })
     //   console.log(this.state)
      }
render(){
    return(
        <>
        <center>
        <h2 className="mt-3">Pagination class component</h2>
        </center>
        <div className="container d-flex justify-content-center text-align-center">
        <Grid container spacing={2}>
            <Grid className="m-3 d-flex gap-3 " item xs={5} sx={{backgroundColor:'gray'}}>
            <Avatar alt="Remy Sharp"  src="https://randomuser.me/api/portraits/med/men/3.jpg" sx={{ width: 80, height: 80 }} />
            <div>
                <p>id</p>
                <p>name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis quidem saepe, pariatur quae quam, officia, aperiam dolore corporis tempora facilis. Quidem corporis, ipsam obcaecati architecto adipisci voluptatem aperiam minus.</p>
            </div>
            </Grid>
            
        </Grid>
        </div>

        </>
    )
}
}
export default PaginationClassComp;