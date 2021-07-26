import {useContext, useEffect} from 'react'
import Repos from '../Components/Repos'
import {GithubContext} from '../context/github/githubContext'

const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className='text-center'>Loading...</p>
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user

  return (
    <>
      <div className='card bg-dark text-white'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3 text-center'>
              <img
                src={avatar_url}
                alt={name}
                style={{width: '250px', borderRadius: '50%'}}
              />
              <h4>{name}</h4>
              {location && <p>Location: {location}</p>}
            </div>
            <div className='col'>
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}

              <ul>
                {login && (
                  <li>
                    Username: <strong>{login}</strong>
                  </li>
                )}
                {company && (
                  <li>
                    Company: <strong>{company}</strong>
                  </li>
                )}
                {blog && (
                  <li>
                    Website: <strong>{blog}</strong>
                  </li>
                )}
              </ul>

              <div className='badge bg-primary m-1'>Followers: {followers}</div>
              <div className='badge bg-success m-1'>Following: {following}</div>

              <div className='badge bg-light text-dark m-1'>
                Repos: {public_repos}
              </div>
              <div className='badge bg-info m-1'>Gists: {public_gists}</div>
              <div>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='btn btn-light mt-4'
                >
                  Open git profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
        <Repos repos={repos} />
      </div>
    </>
  )
}

export default Profile
