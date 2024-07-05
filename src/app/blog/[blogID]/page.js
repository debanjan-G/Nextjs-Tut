const Blog = ({ params }) => {
    return (
        <h1 className="text-5xl font-bold my-4 text-center">Welcome to {params.blogID}</h1>
    )
}

export default Blog;