import { Post } from "@common/types";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

interface ItemComponentProps {
    post: Post;
    editPost: any;
    deletePost: any;
}

export const ItemComponent = ( {post, editPost, deletePost} : ItemComponentProps ) => {
    return (
        <Card className="list_item">
            <div className="list_item_text">
                <div>
                    <Typography variant="h6" gutterBottom>
                        {post.title}
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        {post.text}
                    </Typography>
                </div>
            </div>
            <div className="list_item_buttons">
                <IconButton onClick={() => deletePost(post.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => editPost(post.id)}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </div>
        </Card>
    );
}