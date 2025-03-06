
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")]))



const parent2 = React.createElement("div", {id:"maindiv"}, [React.createElement("div", {id:"child1"}, "this is child1" ), React.createElement("div", {id:"child2"}, "this is child2")])

const heading = React.createElement(
    "h1",
    { id: "headingID" },
    "Hello world"
);

console.log(heading);

const renderRoot = ReactDOM.createRoot(document.getElementById("mainApp"));

renderRoot.render(parent2);

console.log("helllooooo", heading)