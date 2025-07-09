//import "./PostCard.css"; // optional styling
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/Loginservice";

function PostCard({ post, onDelete }) {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleEdit = () => {
    navigate(`/Edit/${post.id}`);
  };
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); 
  };

  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} className="blog-image" />
      <div className="blog-content">
        <strong>Date:</strong> {post.date ? formatDate(post.date) : "N/A"}
        <strong>Author:</strong> {post.author || "Guest"}<br />
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 100)}...</p>
      </div>
      <div className="card-actions">
        <button onClick={handleEdit} className="edit-btn">✏️ Edit</button>
        <button onClick={() => onDelete(post.id)} className="delete-btn">🗑 Delete</button>
      </div>
    </div>
  );
}

export default PostCard;
