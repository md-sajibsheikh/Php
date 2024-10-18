const days = [
  {
    day: 1,
    title: "Setting Up the Environment",
    tasks: [
      "Download and install XAMPP.",
      "Verify your PHP installation.",
      "Download and install Composer.",
      "Install VS Code.",
      "Install essential VS Code extensions for PHP."
    ]
  },
  {
    day: 2,
    title: "Basic PHP Syntax",
    tasks: [
      "Write your first PHP script ('Hello World').",
      "Run your PHP script from the terminal.",
      "Explore variable naming conventions in PHP.",
      "Understand different variable types in PHP."
    ]
  },
  {
    day: 3,
    title: "Working with Variables",
    tasks: [
      "Practice declaring and using variables.",
      "Understand variable scope in PHP.",
      "Learn about global and local variables.",
      "Use superglobals like $_GET and $_POST."
    ]
  },
  {
    day: 4,
    title: "Constants and Comments",
    tasks: [
      "Define and use constants in PHP.",
      "Differentiate between define() and const.",
      "Add single-line comments to your code.",
      "Practice multi-line comments in PHP."
    ]
  },
  {
    day: 5,
    title: "Conditional Statements",
    tasks: [
      "Write basic if statements.",
      "Use else and elseif conditions.",
      "Understand the ternary operator.",
      "Explore the switch statement."
    ]
  },
  {
    day: 6,
    title: "Loops in PHP",
    tasks: [
      "Write a for loop.",
      "Explore the while loop.",
      "Understand the do-while loop.",
      "Loop through arrays using foreach."
    ]
  },
  {
    day: 7,
    title: "Introduction to Arrays",
    tasks: [
      "Create indexed arrays.",
      "Access elements in an array.",
      "Loop through indexed arrays.",
      "Modify array elements."
    ]
  },
  {
    day: 8,
    title: "Associative Arrays",
    tasks: [
      "Create associative arrays.",
      "Access elements in associative arrays.",
      "Loop through associative arrays using foreach.",
      "Understand the difference between indexed and associative arrays."
    ]
  },
  {
    day: 9,
    title: "Multidimensional Arrays",
    tasks: [
      "Declare a multidimensional array.",
      "Access elements in a multidimensional array.",
      "Loop through a multidimensional array.",
      "Work with associative multidimensional arrays."
    ]
  },
  {
    day: 10,
    title: "Array Functions",
    tasks: [
      "Use array_values() and array_keys().",
      "Combine arrays using array_combine().",
      "Add elements to arrays with array_push().",
      "Remove elements using array_pop() and array_shift()."
    ]
  },
  {
    day: 11,
    title: "Advanced Array Operations",
    tasks: [
      "Slice arrays with array_slice().",
      "Replace parts of arrays using array_splice().",
      "Search arrays with in_array() and array_search().",
      "Count array elements using count() and sizeof()."
    ]
  },
  {
    day: 12,
    title: "Sorting Arrays",
    tasks: [
      "Sort arrays in ascending order with sort().",
      "Sort arrays in descending order with rsort().",
      "Sort arrays by key with ksort() and krsort().",
      "Use natural order sorting with natsort()."
    ]
  },
  {
    day: 13,
    title: "Introduction to Strings",
    tasks: [
      "Create and manipulate string variables.",
      "Concatenate strings in PHP.",
      "Explore string interpolation.",
      "Handle special characters in strings."
    ]
  },
  {
    day: 14,
    title: "Basic String Functions",
    tasks: [
      "Measure string length with strlen().",
      "Find a substring using strpos().",
      "Extract a substring with substr().",
      "Convert strings to lowercase and uppercase (strtolower(), strtoupper())."
    ]
  },
  {
    day: 15,
    title: "Advanced String Functions",
    tasks: [
      "Replace parts of a string with str_replace().",
      "Repeat strings with str_repeat().",
      "Reverse a string using strrev().",
      "Split a string into an array with explode()."
    ]
  },
  {
    day: 16,
    title: "String Manipulation",
    tasks: [
      "Remove whitespace with trim(), ltrim(), and rtrim().",
      "Compare strings with strcmp().",
      "Hash strings with md5() and sha1().",
      "Format strings using sprintf()."
    ]
  },
  {
    day: 17,
    title: "Regular Expressions with Strings",
    tasks: [
      "Match patterns in strings using preg_match().",
      "Replace patterns with preg_replace().",
      "Extract multiple matches with preg_match_all().",
      "Use advanced regex patterns for string validation."
    ]
  },
  {
    day: 18,
    title: "Working with Forms",
    tasks: [
      "Create an HTML form.",
      "Handle form submission with PHP.",
      "Validate form inputs.",
      "Sanitize user input."
    ]
  },
  {
    day: 19,
    title: "File Handling Basics",
    tasks: [
      "Open files using fopen().",
      "Read files with fread().",
      "Write to files with fwrite().",
      "Close files using fclose()."
    ]
  },
  {
    day: 20,
    title: "File Uploads",
    tasks: [
      "Handle file uploads with $_FILES.",
      "Validate uploaded files.",
      "Move uploaded files using move_uploaded_file().",
      "Display uploaded files in the browser."
    ]
  },
  {
    day: 21,
    title: "Sessions in PHP",
    tasks: [
      "Start a session in PHP.",
      "Store and retrieve session data.",
      "Destroy a session.",
      "Understand where session data is stored."
    ]
  },
  {
    day: 22,
    title: "Cookies in PHP",
    tasks: [
      "Set cookies in PHP.",
      "Retrieve cookie values.",
      "Delete cookies.",
      "Compare sessions and cookies."
    ]
  },
  {
    day: 23,
    title: "Object-Oriented Programming (OOP) Basics",
    tasks: [
      "Create a class in PHP.",
      "Instantiate objects from a class.",
      "Add properties and methods to a class.",
      "Use the __construct method."
    ]
  },
  {
    day: 24,
    title: "OOP Inheritance",
    tasks: [
      "Implement inheritance between classes.",
      "Override methods in child classes.",
      "Use the parent keyword to access parent methods.",
      "Understand abstract classes."
    ]
  },
  {
    day: 25,
    title: "Access Modifiers",
    tasks: [
      "Use public properties and methods.",
      "Implement protected properties and methods.",
      "Understand private properties and methods.",
      "Practice using access modifiers in OOP."
    ]
  },
  {
    day: 26,
    title: "Working with MySQL",
    tasks: [
      "Connect to MySQL using MySQLi.",
      "Execute basic SQL queries.",
      "Fetch data from the database.",
      "Close the database connection."
    ]
  },
  {
    day: 27,
    title: "Prepared Statements",
    tasks: [
      "Use prepared statements with MySQLi.",
      "Bind parameters to prepared statements.",
      "Execute and fetch results from prepared statements.",
      "Handle errors in prepared statements."
    ]
  },
  {
    day: 28,
    title: "Working with JSON",
    tasks: [
      "Encode PHP arrays to JSON.",
      "Decode JSON to PHP arrays.",
      "Handle JSON data in APIs.",
      "Work with JSON and forms."
    ]
  },
  {
    day: 29,
    title: "Error Handling Basics",
    tasks: [
      "Understand syntax errors.",
      "Handle fatal errors in PHP.",
      "Manage warnings and notices.",
      "Use custom error handling with trigger_error()."
    ]
  },
  {
    day: 30,
    title: "Debugging in PHP",
    tasks: [
      "Use var_dump() and print_r() for debugging.",
      "Set up XDebug in VS Code.",
      "Set breakpoints and step through code.",
      "Watch variables in XDebug."
    ]
  },
  {
    day: 31,
    title: "Regular Expressions",
    tasks: [
      "Use preg_match() to validate input.",
      "Search for patterns with preg_match_all().",
      "Replace text using preg_replace().",
      "Practice using regex in form validation."
    ]
  },
  {
    day: 32,
    title: "File System Operations",
    tasks: [
      "Create and delete directories in PHP.",
      "Read directory contents with scandir().",
      "Copy and move files in PHP.",
      "Handle file paths using realpath()."
    ]
  },
  {
    day: 33,
    title: "Advanced Error Handling",
    tasks: [
      "Use try-catch blocks for exceptions.",
      "Create custom exception classes.",
      "Log exceptions to a file.",
      "Display user-friendly error messages."
    ]
  },
  {
    day: 34,
    title: "Functions with Parameters and Return Types",
    tasks: [
      "Define functions with parameters.",
      "Use functions with default parameter values.",
      "Return values from functions.",
      "Understand type hinting in function arguments."
    ]
  },
  {
    day: 35,
    title: "Advanced Array Functions",
    tasks: [
      "Use array_map() to apply a function to array elements.",
      "Filter arrays with array_filter().",
      "Merge arrays using array_merge().",
      "Replace array values using array_replace()."
    ]
  },
  {
    day: 36,
    title: "Working with Sessions",
    tasks: [
      "Start and manage sessions in PHP.",
      "Store and retrieve session data.",
      "Implement session security.",
      "Destroy sessions properly."
    ]
  },
  {
    day: 37,
    title: "Object-Oriented Programming: Static Properties and Methods",
    tasks: [
      "Define static properties in a class.",
      "Access static properties without instantiation.",
      "Create static methods in a class.",
      "Call static methods without creating an instance."
    ]
  },
  {
    day: 38,
    title: "Advanced Object-Oriented Programming",
    tasks: [
      "Use traits for code reuse in classes.",
      "Understand interfaces and polymorphism.",
      "Implement design patterns (Singleton, Factory).",
      "Explore dependency injection in PHP."
    ]
  },
  {
    day: 39,
    title: "File Handling: Reading and Writing",
    tasks: [
      "Read entire files using file_get_contents().",
      "Write to files using file_put_contents().",
      "Handle file locking for safe writing.",
      "Work with large files efficiently."
    ]
  },
  {
    day: 40,
    title: "Security Best Practices",
    tasks: [
      "Prevent SQL injection with prepared statements.",
      "Sanitize user input with htmlspecialchars().",
      "Protect against XSS attacks.",
      "Use HTTPS for secure connections."
    ]
  },
  {
    day: 41,
    title: "Working with Databases",
    tasks: [
      "Normalize database structure for efficiency.",
      "Implement foreign keys and relationships.",
      "Use transactions in MySQL.",
      "Optimize database queries."
    ]
  },
  {
    day: 42,
    title: "API Integration",
    tasks: [
      "Send HTTP requests using file_get_contents() and cURL.",
      "Handle API responses in JSON.",
      "Authenticate API requests with tokens.",
      "Use cURL for advanced API requests."
    ]
  },
  {
    day: 43,
    title: "Handling Large Datasets",
    tasks: [
      "Paginate database results in PHP.",
      "Optimize SQL queries for large data sets.",
      "Implement lazy loading for efficiency.",
      "Use LIMIT and OFFSET for data pagination."
    ]
  },
  {
    day: 44,
    title: "Advanced MySQLi Techniques",
    tasks: [
      "Perform complex queries with joins.",
      "Handle subqueries in MySQL.",
      "Use indexing to improve query performance.",
      "Implement database backup and restore procedures."
    ]
  },
  {
    day: 45,
    title: "Error Logging and Monitoring",
    tasks: [
      "Set up error logging in PHP.",
      "Monitor error logs for issues.",
      "Handle and log exceptions.",
      "Implement a custom error handler."
    ]
  },
  {
    day: 46,
    title: "JSON Web Tokens (JWT)",
    tasks: [
      "Understand the structure of JWT.",
      "Create and sign JWTs in PHP.",
      "Validate and decode JWTs.",
      "Implement JWT-based authentication."
    ]
  },
  {
    day: 47,
    title: "Testing in PHP",
    tasks: [
      "Write unit tests with PHPUnit.",
      "Test object-oriented code.",
      "Use assertions in PHPUnit.",
      "Test API endpoints with PHPUnit."
    ]
  },
  {
    day: 48,
    title: "Advanced File Upload Security",
    tasks: [
      "Validate file types before uploading.",
      "Restrict file upload sizes.",
      "Scan uploaded files for viruses.",
      "Store uploaded files securely."
    ]
  },
  {
    day: 49,
    title: "Building REST APIs",
    tasks: [
      "Set up a basic REST API in PHP.",
      "Handle GET requests.",
      "Handle POST requests.",
      "Secure API endpoints."
    ]
  },
  {
    day: 50,
    title: "Sessions and Cookies Deep Dive",
    tasks: [
      "Explore session configuration options.",
      "Implement session locking for concurrency.",
      "Secure cookies with SameSite and Secure attributes.",
      "Handle cross-site cookie security."
    ]
  },
  {
    day: 51,
    title: "PHP and MySQL Security Best Practices",
    tasks: [
      "Use prepared statements to prevent SQL Injection.",
      "Hash passwords using the password_hash() function.",
      "Implement Captcha to prevent bots.",
      "Use CSRF tokens for form security."
    ]
  },
  {
    day: 52,
    title: "Web Application Performance Optimization",
    tasks: [
      "Cache data using Redis or Memcached.",
      "Optimize SQL queries for better performance.",
      "Use PHP OpCode caching.",
      "Minify CSS and JavaScript for faster load times."
    ]
  },
  {
    day: 53,
    title: "Advanced API Development",
    tasks: [
      "Use OAuth for API authentication.",
      "Implement rate limiting to secure APIs.",
      "Paginate API responses for large datasets.",
      "Handle API errors with proper status codes."
    ]
  },
  {
    day: 54,
    title: "PHP Design Patterns",
    tasks: [
      "Learn about Singleton, Factory, and Observer patterns.",
      "Implement the MVC pattern in PHP for large applications.",
      "Understand Dependency Injection and why it matters."
    ]
  },
  {
    day: 55,
    title: "PHP with Docker",
    tasks: [
      "Set up a Docker environment for PHP development.",
      "Create Docker containers for PHP, MySQL, and Nginx.",
      "Deploy PHP applications using Docker.",
      "Learn about Docker Compose for multi-container setups."
    ]
  },
  {
    day: 56,
    title: "Real-Time Applications with PHP",
    tasks: [
      "Use WebSockets in PHP for real-time communication.",
      "Implement real-time notifications in a PHP application.",
      "Use libraries like Ratchet for WebSocket integration."
    ]
  },
  {
    day: 57,
    title: "Unit Testing in Depth",
    tasks: [
      "Write advanced tests using mocks and stubs.",
      "Test database operations using PHPUnit.",
      "Test API endpoints with cURL and PHPUnit.",
      "Automate testing with continuous integration tools."
    ]
  },
  {
    day: 58,
    title: "PHP with Cloud Services",
    tasks: [
      "Deploy PHP applications to AWS (Amazon Web Services).",
      "Store files on S3 using the AWS SDK.",
      "Use AWS RDS for MySQL databases.",
      "Monitor server health using CloudWatch."
    ]
  }
];

let currentDay = 1;

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";
  days.forEach((day) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#" class="block p-2 hover:bg-indigo-700 rounded" onclick="loadDay(${day.day})">${day.day}. ${day.title}</a>`;
    sidebar.appendChild(listItem);
  });
}

function renderDayContent() {
  const dayContent = document.getElementById("dayContent");
  const day = days[currentDay - 1];
  const currentDate = new Date().toLocaleString();

  dayContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-5">${day.day}. ${day.title}</h2>
        <p class="text-gray-600 mb-5">Live Day and Time: <span class="font-bold">${currentDate}</span></p>
        <ul class="space-y-2">
            ${day.tasks
              .map((task) => `<li class="text-gray-800">- ${task}</li>`)
              .join("")}
        </ul>
    `;
}

function navigate(direction) {
  currentDay += direction;
  if (currentDay < 1) currentDay = 58;
  if (currentDay > 58) currentDay = 1;
  renderDayContent();
}

function loadDay(dayNumber) {
  currentDay = dayNumber;
  renderDayContent();
}

// Initialize the page
renderSidebar();
renderDayContent();
