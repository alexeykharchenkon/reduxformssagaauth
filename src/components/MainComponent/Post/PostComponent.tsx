import { Post } from "@common/types";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Card, Typography, IconButton } from '@material-ui/core';

interface PostComponentProps {
    post: Post;
    editPost: any;
    deletePost: any;
}

export const PostComponent = ({ post, editPost, deletePost }: PostComponentProps ) => {
    console.log("post")
    return (
        <Card className="list_component">
            <Typography variant="h3" gutterBottom>
                {post.title}
            </Typography>
            <Card className="post"> 
                <Typography variant="subtitle2" gutterBottom>
                    {post.text}
                </Typography>
                <div className="post_buttons">
                    <IconButton onClick={() => deletePost(post.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => editPost(post.id)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </div>
            </Card>
        </Card>
    );
}