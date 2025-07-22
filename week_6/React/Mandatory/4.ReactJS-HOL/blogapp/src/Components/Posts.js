import React, {Component} from 'react';
// IMPORTANT: Please confirm the path for Post.js.
// If Post.js is in the same 'src' folder as Posts.js, use './Post'.
// If Post.js is in a folder named 'Post' inside 'src', use './Post/Post'.
// Based on the file path in your error (C:\Users\sumit\OneDrive\Documents\react\blogapp\src\Components\Posts.js),
// if Posts.js is inside a 'Components' folder, and Post.js is directly in 'src',
// then '../Post' could be correct. However, if Post.js is also inside 'Components', use './Post'.
// For now, I'll stick to '../Post' as you provided it, but be mindful of your actual file structure.
import Post from '../Post';


class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [], // This initializes the 'posts' array in the component's state
            hasError: false, // Make sure these are also in your state for componentDidCatch
            errorMessage: '' // Make sure these are also in your state for componentDidCatch
        };
    }

    // --- START OF CORRECTED loadPosts() METHOD ---
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts') // The URL for fetching posts
            .then(response => {
                if (!response.ok) { // Basic error checking for network issues
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                // Map the fetched raw data to instances of our Post class
                const fetchedPosts = data.map(item => new Post(item.id, item.title, item.body));
                // Update the component's state with the new posts
                this.setState({
                    posts: fetchedPosts,
                    hasError: false, // Reset error state on successful fetch
                    errorMessage: ''
                });
            })
            .catch(error => {
                // Log any errors that occur during the fetch operation
                console.error("Could not fetch posts:", error);
                this.setState({
                    hasError: true,
                    errorMessage: "Failed to load posts. Please try again later." // Set user-friendly message
                });
                alert("An error occurred while loading posts: " + error.message); // As per instruction: alert message
            });
    }
    // --- END OF CORRECTED loadPosts() METHOD ---

    componentDidMount() { // Implement the componentDidMount() hook
        this.loadPosts(); // Call loadPosts() to fetch the posts
    }

    componentDidCatch(error, info) { // Define a componentDidCatch() method
        // You can log the error to an error reporting service here
        console.error("Caught an error:", error, info);
        this.setState({
            hasError: true,
            errorMessage: "Something went wrong within the component." // A more general error message
        });
        alert("An internal component error occurred: " + error.message); // As per instruction: alert message
    }

    render() { // Implement the render() method
        if (this.state.hasError) {
            // Render fallback UI if an error occurs
            return <h1>{this.state.errorMessage}</h1>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.length > 0 ? ( // Check if posts exist before mapping
                    this.state.posts.map(post => ( // Changed `Post` to `post` for clarity in mapping variable
                        <div key={post.id}> {/* Key prop is important for lists */}
                            <h2>{post.title}</h2> {/* Display title as heading*/}
                            <p>{post.body}</p>   {/* Display body as paragraph*/}
                            <hr /> {/* Optional: add a separator between posts */}
                        </div>
                    ))
                ) : (
                    <p>Loading posts...</p> // Display a loading message
                )}
            </div>
        );
    }
}

export default Posts;