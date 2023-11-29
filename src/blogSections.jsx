function BlogSection() {
    const post = [
        {
            topic: 'a',
            text: 'abcd',
            date: '01.03.2023'
        }
    ]
    return (
        <div>
            <section className="blog-body">
                {post.map( item => {
                <article>
                <h1>{item.topic}</h1>
                <p>{item.text}</p>
                <span>{item.date}</span>
                </article>
                })}

            </section>
        </div>
    )
}

export default BlogSection;