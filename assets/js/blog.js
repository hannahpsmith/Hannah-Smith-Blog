const container = document.querySelector('#container');

const blogs = JSON.parse(localStorage.getItem('blogs'))


function createElement(elementType, content) {
    const element = document.createElement(elementType);
    const textNode = document.createTextNode(content);
    element.appendChild(textNode);
    return element;
}

function renderBlogPost(blogPost) {
	const div = createElement("div", "");
	div.className = "blog-container";
	const title = createElement("h2", blogPost.title);
	title.className = "blog-container-title";
	const usernameText = `Posted by: ${blogPost.username}`;
	const username = createElement("p", usernameText);
	username.setAttribute('class', 'blog-container-content');
	const content = createElement("p", blogPost.content);
	content.setAttribute('class', 'blog-container-content');
	div.appendChild(title);
	div.appendChild(username);
	div.appendChild(content);
	container.appendChild(div);
}

blogs.forEach((blogPost) => {
	renderBlogPost(blogPost);
});

const backButton = document.getElementById('backButton');
backButton.addEventListener('click', () => history.back());