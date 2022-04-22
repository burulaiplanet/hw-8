
import './CommentWrapper.css'
function CommentWrapper(props){
    let classes= 'wrapper ' + props.className //propstan className kelet
    
return <div className={classes}>{props.children}</div>
}
export default CommentWrapper