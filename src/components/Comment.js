import CommentWrapper from '../UI/CommentWrapper'
import CommentDate from './CommentDate'
import UserInfo from './UserInfo'
import './Comment.css'
function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo author={props.author} />
			<CommentWrapper className='name-date'>
				<div className='Comment-text'>{props.text}</div>
				<CommentDate date={props.date} />
			</CommentWrapper>
		</div>
	)
}
export default Comment
