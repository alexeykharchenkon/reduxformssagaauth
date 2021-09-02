import { Typography, Card } from '@material-ui/core';
import { Paginate, ItemComponent } from "@components/MainComponent";
import { Loader } from "@common/components";
import { Post } from "@common/types";

interface ListComponentProps {
    posts: Post[];
    editPost: any;
    deletePost: any;
    changePage: any;
    pageCount: any;
    isPostsLoading: boolean;
    listTitle: string;
}

export const ListComponent = ({ posts, editPost, deletePost, changePage, 
    pageCount, isPostsLoading, listTitle }: ListComponentProps) => {
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>{listTitle}</Typography>
             {isPostsLoading && <Loader />}
                {posts?.map(post => (
                    <ItemComponent 
                        key={post.id}
                        post={post}
                        editPost={editPost}
                        deletePost={deletePost}
                    />
                ))}
            <Paginate
                pageCount={pageCount}
                changePage={changePage}
            />
        </Card>
    );
}