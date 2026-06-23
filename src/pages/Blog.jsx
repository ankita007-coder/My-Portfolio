import React, { useEffect, useState } from "react";
import "../assets/css/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=ankita_budhia",
        );
        const data = await res.json();
        setPosts(data.slice(0, 6)); // show latest 6 posts
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blogs-page">
      {" "}
      <div className="blogs-header">
        {" "}
        <h4 className="steps-head">BLOGS</h4>{" "}
        <h2 className="head">
          Things I’ve built, <br /> <span>broken, and learned from</span>{" "}
        </h2>{" "}
        <p className="one-liner">
          Writing about frontend engineering, full-stack development, GenAI
          experiments, and the occasional lesson learned after debugging for far
          too long.{" "}
        </p>{" "}
      </div>
      {loading ? (
        <div className="blog-grid">
          {[...Array(3)].map((_, index) => (
            <div className="blog-card skeleton-card" key={index}>
              <div className="skeleton skeleton-image"></div>
              <div className="blog-content">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </div>
            </div>
          ))}
        </div>
      ) : posts.length > 0 ? (
        <div className="blog-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              {post.cover_image ? (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="blog-cover"
                />
              ) : (
                <div className="blog-cover fallback-cover">
                  <span>DEV.to</span>
                </div>
              )}

              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.reading_time_minutes} min read</span>
                </div>

                <h3>{post.title}</h3>

                <p>
                  {post.description
                    ? post.description
                    : "Read the full article on DEV.to."}
                </p>

                <div className="tags">
                  {post.tag_list?.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="read-more">Read article →</div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="no-blogs">
          <h3>
            No posts yet — but the drafts are probably judging me already.
          </h3>
          <p>
            I’ll be writing here about frontend engineering, side projects,
            backend experiments, and lessons from building things that
            occasionally work on the first try.
          </p>
        </div>
      )}
    </section>
  );
};

export default Blog;
