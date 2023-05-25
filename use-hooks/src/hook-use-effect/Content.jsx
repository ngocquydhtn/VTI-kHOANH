import React, { useEffect, useState } from "react";

function Content() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Content;

/////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";

// function Content() {
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       console.log(window.innerHeight);
//       setWindowHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <p>Window Height: {windowHeight}</p>;
// }

// export default Content;

//////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";

// function Content() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("Effect ran!");
//     document.title = `Count: ${count}`;

//     return () => {
//       console.log("Cleanup ran!");
//     };
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <input
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Content;
