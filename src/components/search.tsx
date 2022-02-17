import { observer } from 'mobx-react';
import { booksStore } from '../book.store';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles({
   searchInput: {
    padding: 15,
    minWidth: 300,
    fontFamily: 'var(--additional-font-family)',
    fontWeight: 600
   }
})

const Search = () => {
    const { isLoading, query, setQuery, 
    searchintByAuthor, setSearchingByAuthor,
    onSearch } = booksStore;
    const classes = useStyles()
    return (
        <div className='search-wrapper'>
        <div className="search-conatiner">
          <FormControl variant="outlined">
            <OutlinedInput
              classes={{input: classes.searchInput}}
              value={query}
              disabled={isLoading}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => (e.key === 'Enter' ? onSearch() : null)}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon className='search-icon'/>
                </InputAdornment>}
            />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={searchintByAuthor}
            onChange={(e) => setSearchingByAuthor(e.target.checked)}
            color="primary"
          />
        }
        label="Searching by author"
      />
       {/* <input 
          id="searchingByAuthor"
          type="checkbox"
          checked={searchintByAuthor}
          onChange={(e) => setSearchingByAuthor(e.target.checked)}
        />
        <label htmlFor='searchingByAuthor'>
            Searching by author
        </label> */}
        </div>
        </div>
    )
}

export default observer(Search);


// <>
        //   <input 
        //   placeholder='Search'
        //   value={query}
        //   disabled={isLoading}
        //   onChange={(e) => setQuery(e.target.value)}
        //   onKeyDown={(e) => (e.key === 'Enter' ? onSearch() : null)}
        // />