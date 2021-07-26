const Repos = ({repos}) => (
  <>
    {repos.map(repo => (
      <div className='bg-dark col-sm-3 rounded-3 m-2 pb-2' key={repo.id}>
        <h5>
          <a
            href={repo.html_url}
            target='_blank'
            rel='noreferrer noopener'
            className='nav-link text-white'
          >
            {repo.name}
          </a>
        </h5>
        <div className='badge bg-success m-1'>
          Stars: {repo.stargazers_count}
        </div>
        <div className='badge bg-primary m-1'>{repo.language}</div>
        {repo.fork ? (
          <div className='badge bg-light text-dark m-1'>Forked</div>
        ) : null}
      </div>
    ))}
  </>
)

export default Repos
