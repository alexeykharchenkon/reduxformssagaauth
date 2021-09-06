import { Typography, Card } from '@material-ui/core';
import { Paginate, ItemComponent, PostsFilter } from "@components/MainComponent";
import { Loader } from "@common/components";
import { Post, User } from "@common/types";

interface ListComponentProps {
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    changePage: (data: any) => void;
    setFilter: (filter: string) => void;
    clickItem: (post: Post) => void;
    posts: Post[];
    pageCount: number;
    isPostsLoading: boolean;
    listTitle: string;
    filter: string;
    isLogged: boolean;
    user: User;
}
    

export const ListComponent = ({ posts, editPost, deletePost, changePage, pageCount, 
    isPostsLoading, listTitle, filter, setFilter, clickItem, isLogged, user }: ListComponentProps) => {
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>{listTitle}</Typography>
            <PostsFilter
                filter={filter}
                setFilter={setFilter}
            />
             {isPostsLoading && <Loader />}
                {posts?.map(post => (
                    <ItemComponent 
                        key={post.id}
                        post={post}
                        editPost={editPost}
                        deletePost={deletePost}
                        clickItem={clickItem}
                        isLogged={isLogged}
                        user={user}
                    />
                ))}
            <Paginate
                pageCount={pageCount}
                changePage={changePage}
            />
        </Card>
    );
}