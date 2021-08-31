import { Post } from "@common/types";
import { ItemComponent } from "./ItemComponent";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Paginate } from "@components/Paginate/Paginate";

interface ListComponentProps {
    posts: Post[];
    editPost: any;
    deletePost: any;
    changePage: any;
    pageCount: any;
}

export const ListComponent = ({ posts, editPost, deletePost, 
    changePage, pageCount }: ListComponentProps) => {
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>
                Posts List
             </Typography>
            <div>
                {posts?.map(post => (
                    <ItemComponent 
                        key={post.id}
                        post={post}
                        editPost={editPost}
                        deletePost={deletePost}
                    />
                ))}
            </div>
            <Paginate
                pageCount={pageCount}
                changePage={changePage}
            />
        </Card>
    );
}