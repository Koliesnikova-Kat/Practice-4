// Порахуй загальну кількість лайків в категорії Fashion

const posts = [
  { title: "Post l", likes: 20, category: "Tech" },
  { title: "Post 2", likes: 45, category: "Fashion" },
  { title: "Post 3", likes: 12, category: "Tech" },
  { title: "Post 4", likes: 36, category: "Fitness" },
  { title: "Post 5", likes: 15, category: "Fashion" },
  { title: "Post 6", likes: 50, category: "Tech" },
];

const total = posts.filter(post => post.category === "Fashion")
                    .reduce((acc, post) => acc + post.likes, 0);

console.log(total);