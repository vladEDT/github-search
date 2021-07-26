const Repos = ({repos}) => (
  <>
    {repos.map(repo => (
      <div className='card' key={repo.id}>
        <div className='card-body'>
          <h5>
            <a href={repo.html_url} target='_blank' rel='noreferrer noopener'>
              {repo.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </>
)

export default Repos
