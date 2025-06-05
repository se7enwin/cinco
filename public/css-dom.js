// Working with Dom

// Execute Css After Loading Html 
document.addEventListener('DOMContentLoaded', () => {

    // Css from tag - Render one - Id one 

    const one = document.getElementById('one');
    one.setAttribute('style', "display:flex;justify-content:center;align-items:center;width:270px;height:30px;font-size:15px;color:white;background-color:blue;border:1px dotted yellow;border-radius:10%;box-shadow:2px 2px 8px blue;");

    // Css from style tag hml - Render two - Id two

    const head = document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML += '#two {display:flex;justify-content:center;align-items:center;width:270px;height:30px;font-size:15px;color:white;background-color:red;border:1px dotted yellow;border-radius:10%;box-shadow:2px 2px 8px red;}'
    head.appendChild(style);

    // Css from external css file - Render three , four - Id three, four

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './styleslynk.css');
    head.appendChild(link);


})


