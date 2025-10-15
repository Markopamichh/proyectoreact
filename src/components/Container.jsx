function Container(props) {
    console.log("props de saludo",props);
    return (
        <div>
            <h2>Container Component</h2>
            <p>{props.saludo}</p>
        </div>
    );
}
export default Container;