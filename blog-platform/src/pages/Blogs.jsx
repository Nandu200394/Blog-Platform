
import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/postservice";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import "../css/blog.css";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  //const navigate = useNavigate();

  useEffect(() => {
    const data = getPosts();
    setPosts(data);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deletePost(id);
      setPosts(getPosts());
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="blogs-container">
      <h2>All Blogs</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {filteredPosts.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;

