import {useContext} from 'react'
import Card from '../Components/Card'
import Search from '../Components/Search'
import {GithubContext} from '../context/github/githubContext'

const Home = () => {
  const {loading, users} = useContext(GithubContext)
  return (
    <>
      <Search />
      <div className='row'>
        {loading ? (
          <p className='text-center'>Loading</p>
        ) : (
          users.map(user => (
            <div className='col-sm-4' key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Home
