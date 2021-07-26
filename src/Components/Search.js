import {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from '../context/github/githubContext'

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user data!', 'danger')
    }
  }

  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Enter a user nickname...'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}

export default Search
