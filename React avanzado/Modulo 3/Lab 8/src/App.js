// import "./App.css";
// import { useEffect, useState } from "react";

// const MousePosition = ({ render }) => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMousePositionChange = (e) => {
//       // Use e.clientX and e.clientY to access the mouse position on the screen
//     };

//     window.addEventListener("mousemove", handleMousePositionChange);

//     return () => {
//       window.removeEventListener("mousemove", handleMousePositionChange);
//     };
//   }, []);

//   // What should be returned here?
//   return null;
// };

// // This component should not receive any props
// const PanelMouseLogger = ({mousePosition}) => {
//   // The below if statement can be removed after the render props pattern is implemented
//   if (!mousePosition) {
//     return null;
//   }
//   return (
//     <div className="BasicTracker">
//       <p>Mouse position:</p>
//       <div className="Row">
//         <span>x: {mousePosition.x}</span>
//         <span>y: {mousePosition.y}</span>
//       </div>
//     </div>
//   );
// };

// // This component should not receive any props
// const PointMouseLogger = ({mousePosition}) => {
//   // The below if statement can be removed after the render props pattern is implemented
//   if (!mousePosition) {
//     return null;
//   }
//   return (
//     <p>
//       ({mousePosition.x}, {mousePosition.y})
//     </p>
//   )
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant 🍕</header>
//       <PanelMouseLogger />
//       <PointMouseLogger />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;