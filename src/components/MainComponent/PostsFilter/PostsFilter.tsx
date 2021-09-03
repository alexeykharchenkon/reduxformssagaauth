import { Checkbox } from '@material-ui/core';
import { SHOW_VIEWED, SHOW_ALL, SHOW_NEW } from '@common/types/states';

interface PostsFilterProps {
    setFilter: any;
    filter: any;
}

export const PostsFilter = ({setFilter, filter} : PostsFilterProps) => {
  return (
        <div className="posts_filter">
          Show All
          <Checkbox
            checked={ filter === SHOW_ALL ? true : false}
            onChange={() => setFilter(SHOW_ALL)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Show Visited
          <Checkbox
            checked={ filter === SHOW_VIEWED ? true : false}
            onChange={() => setFilter(SHOW_VIEWED)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
           Show New
          <Checkbox
            checked={ filter === SHOW_NEW ? true : false}
            onChange={() => setFilter(SHOW_NEW)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
  );
}

