import { Post } from "@common/types";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Card, Typography, IconButton } from '@material-ui/core';

interface PostComponentProps {
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    post: Post | undefined;
}

export const PostComponent = ({ editPost, deletePost, post }: PostComponentProps ) => {   
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>
                {post?.title}
            </Typography>
            <Card className="post"> 
                <Typography variant="body2" component="p">
                    {post?.text}
                </Typography>
                <div className="post_buttons">
                    <IconButton onClick={() => deletePost(post?.id as string)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => editPost(post?.id as string)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </div>
            </Card>
        </Card>
    );
}