
import ImageSlider from "../components/imageSlider";
import '../css/Home.css'
function Home() {
  const slides = [
    { url: "https://anybodycanbake.com/wp-content/uploads/2021/12/Cooking-Food-Blogs.jpg", title: "food" },
    { url: "https://justglobetrotting.com/wp-content/uploads/2018/04/how-to-start-travel-blog.jpg", title: "travel" },
    { url: "https://indianstudent.in/wp-content/uploads/2022/05/personal-blog.jpg", title: "personal" },
    { url: "https://d2ds8yldqp7gxv.cloudfront.net/Blog+Images/745.webp", title: "city" },
    { url: "https://i0.wp.com/themes.svn.wordpress.org/vw-blog-magazine/1.2.6/screenshot.png?w=post-thumbnail&strip=all", title: "italy" },
  ];
  const containerStyles = {
    width: "1000px",
    height: "580px",
    margin: "0 auto",
  };
  return (
    
    <div className="home-page">
      <img src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-13021.jpg"/>
      <h1>Welcome to the Blog Platform </h1>
       <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      
    </div>
  );
}

export default Home;

  



