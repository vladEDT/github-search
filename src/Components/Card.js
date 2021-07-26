import {Link} from 'react-router-dom'

const Card = ({user}) => (
  <div className='card mt-3'>
    <img src={user.avatar_url} alt={user.login} className='card-img-top' />
    <div className='card-body'>
      <h5 className='card-title fs-4'>{user?.login}</h5>
      <Link to={`/profile/${user.login}`} className='btn btn-primary'>
        Open
      </Link>
    </div>
  </div>
)

export default Card
