const Main = () => {
    const name = "Iliyas";

    
    const getUserName = () => {
    "Sipaiiliyas@123"
}
    return(
        <>
           <h1>Welcome to JSX</h1>
             JSX (JavaScript XML) is a syntax extension used in React that allows developers to write HTML-like code within JavaScript. 
             It makes creating UI components more intuitive and readable. One powerful feature of JSX is the ability to insert dynamic data using curly braces {}. 
             For example, if you have a variable like const name = "Iliyas"; you can display it in your JSX by writing <h1>Hello, {name}!</h1>.
              The value inside the curly braces is treated as regular JavaScript, 
              so you can also include expressions like {5 + 3} or function calls like {getUserName()}. 
              This makes JSX very flexible for building dynamic and interactive user interfaces.
              </>
    )
}

export default Main