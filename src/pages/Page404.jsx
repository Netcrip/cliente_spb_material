import PageNotFound from "../assets/img/404-error.jpg"
import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <img src={PageNotFound} style={{ minHeight: '100%' }} />
            <p style={{textAlign:"center"}}>
              <Link to="/login">login </Link>
            </p>
        </div>
    )
}

export default Page404
