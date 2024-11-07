function About() {
    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">About This Project</h1>
            <p className="mt-4 text-lg">
                This is my first project using Next.js, styled with Tailwind CSS.
            </p>
            <p className="mt-2 text-lg">
                I’m also working with the Reqres API to fetch sample data.
            </p>
            <p className="mt-2 text-lg">
                You can find my work on GitHub at <a href="https://github.com/chjuca" className="text-blue-500 underline">chjuca</a>.
            </p>
            <p className="mt-2 text-lg">
                Tools: Next.js, Tailwind CSS, Reqres API.
            </p>
        </div>
    );
}

export default About