import Link from "next/link";

const Blog = () => {
    return (
        <>
            <h1 className="text-5xl font-bold my-4 text-center">Blog</h1>
            <div className="flex justify-center gap-4">
            <Link href="/blog/blog-1" className="border border-white p-4 rounded-sm ">Check out Blog 1</Link>
            <Link href="/blog/blog-2" className="border border-white p-4 rounded-sm ">Check out Blog 2</Link>   
            </div>
           
        </>
        
    )
}

export default Blog;