<h1>React News App with Authentication</h1>
<p>This is a React-based application where users can log in, sign up, and explore the latest news based on categories like Technology, Business, Health, and more. It uses Firebase Authentication for managing users and NewsAPI to fetch the latest articles based on selected categories.</p>
<br>
<h2>Features</h2>
<p>1)User Authentication: Sign up and log in using Firebase authentication.</p>
<p>2)News Categories: Users can select from multiple categories like Technology, Business, Science, etc.</p>
<p>3)News Fetching: Get the latest articles from the NewsAPI based on the selected category.</p>
<p>4)Responsive Navbar: A responsive navbar with active link highlighting when categories are selected.</p>
<p>5)Protected Routes: Access news and other content only after successful login.</p>
<br>
<h2>Routing & Components</h2>
<h3>HomePage (/)</h3>
<p>A welcoming page with buttons to navigate to the Login or SignUp page.</p>
<h3>LoginPage (/login)</h3>
<p>A page where users can log in using their email and password with Firebase authentication.</p>
<h3>SignupPage (/signup)</h3>
<p>A page where new users can create an account.</p>
<h3>NewsPage (/news)</h3>
<p>Displays the latest news articles based on the selected category.</p>
<br>
<h2>API Integration</h2>
<p>The app uses the NewsAPI to fetch the latest articles. News articles are fetched based on the selected category and displayed on the NewsBoard component</p>
