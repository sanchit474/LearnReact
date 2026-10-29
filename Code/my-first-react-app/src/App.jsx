import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Like {likes}
    </button>
  );
}

export default LikeButton;
// function App() {
//   return (
//     <div>
//       <h1>Hello React! 🚀</h1>
//       <p>My React journey starts today.</p>
//       <button onClick={() => alert("React is working!")}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;
