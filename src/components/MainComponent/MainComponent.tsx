import { Route, Switch } from "react-router-dom";
import { RightBar, ListComponent, PostComponent } from '@components/MainComponent';
import { User, Post } from '@common/types';

interface MainProps {
  posts: Post[];
  user: User;
  logState: string;
  pageCount: number;
  isPostsLoading: boolean;
  currentPost: Post | undefined;
  filter: string;
  isLogged: boolean;
  editPost: (id: string) => void;
  deletePost: (id: string) => void;
  changePage: (values: any) => void;
  handleSubmit: (values: any) => void;
  loginSubmit: (values: any) => void;
  registerSubmit: (values: any) => void;
  loginFormChange: (type: string) => void;
  logout: () => void;
  clickItem: (post: Post) => void;
  setFilter: (filter: string) => void;
  getPost: (id: string) => void;
}

export const MainComponent = ({ posts, user, logState, pageCount, 
  isPostsLoading, editPost, deletePost, changePage, handleSubmit, loginSubmit,
  registerSubmit, loginFormChange, logout, clickItem, currentPost, filter, 
  setFilter, getPost, isLogged } : MainProps) => {

  return (
      <div className="app">
        <Switch>
          <Route path='/post/:id'>
            <PostComponent 
              editPost={editPost}
              deletePost={deletePost}
              post={currentPost}
              getPost={getPost}
              isLogged={isLogged}
              user={user}
            />
          </Route>
          <Route exact path='/'>
            <ListComponent 
              editPost={editPost}
              deletePost={deletePost}
              clickItem={clickItem}
              changePage={changePage}
              setFilter={setFilter}
              posts={posts}
              pageCount={pageCount}
              isPostsLoading={isPostsLoading}
              listTitle="Posts List"
              filter={filter}
              isLogged={isLogged}
              user={user}
            />
          </Route>
        </Switch>
        <RightBar 
          handleSubmit={handleSubmit}
          loginSubmit={loginSubmit}
          registerSubmit={registerSubmit}
          loginFormChange={loginFormChange}
          logout={logout}
          user={user}
          logState={logState}
        />
      </div>
  );
}