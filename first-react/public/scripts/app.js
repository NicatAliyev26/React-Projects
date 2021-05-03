const root = document.getElementById("root");


var counter = () => {
    
    var infotime = (
        <div>
            <h2>Time is : {new Date().toLocaleTimeString()}</h2>        
        </div>
        
    );

    ReactDom.render(infotime,root);
}

setInterval(counter,1000)

