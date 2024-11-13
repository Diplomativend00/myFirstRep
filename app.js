//how to create neted element in react like multiple tag inside another tag
//ReactElement is an object =html(browser understand)


const parent = React.createElement('div',
    {id:'parent'},
   [ React.createElement('div',
    {id:'child'},
    //how to create siblings of any tags - we wrapped it into an array
   
    [React.createElement('h1',{}, 'Hello i am heading'),
    React.createElement('h1',{}, 'Hello i am heading2')
    ]),
 React.createElement('div',
    {id:'child'},
    //how to create siblings of any tags - we wrapped it into an array
    
    [React.createElement('h1',{}, 'Hello i am heading'),
    React.createElement('h1',{}, 'Hello i am heading2')]
 )]
);


//so here it is looks like very complicated to write so we have `jsx`.


console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent); //here it covert it into html and puts into the dom



/**const heading = React.createElement('h1', {id:'heading'} , 'Hello world from react');
 console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);**/