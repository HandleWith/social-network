import { useParams } from "react-router-dom"

const withRouter = (Component) => {
    return(props) => {
      const match = {params: useParams()}
      return <Component {...props} match = {match}/>
    }
}

export default withRouter