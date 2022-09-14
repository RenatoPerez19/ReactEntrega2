function Nav(){

let StyleHeader={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    top: 0 ,
    backgroundColor: "grey",
    
    
}

let StyleNav={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around",
    gap:"3px",
    textDecoration:"none",
    
}

let StyleItem={
    color: "white",
    fontSize: 40,
    textDecoration:"none",

}
    return(
        <header style={StyleHeader}>
        <nav style={StyleNav}>
            <ul style={StyleNav}>
                <a style={StyleItem}>Inicio</a>
                <br></br>
                <a style={StyleItem}>New in</a>
                <br></br>
                <a style={StyleItem}>contactos</a>
                <br></br>
                <a style={StyleItem}>ofertas</a>
                <br></br>
            </ul>
        </nav>

    </header>
    );

}

export default Nav