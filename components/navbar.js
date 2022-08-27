let navbar = ()=>{
    return `<div id="div1">
        
            <img  id="first" src="data:image/png;base64,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" alt="">
            <img id="second" src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png" alt="">     

           <p><a href="./index.html">Find jobs</a></p> 
            <p><a href="./companyreview.html"> Company reviews</a></p>
            <p><a href="./salary.html">Salary Guide</a></p>
    
         </div>
    
    <div id="div2">
        <a href="./signin.html">Signin</a>
        <a href="./signup.html">Signup</a>
    </div>`
}
let signin_navbar = ()=>{
    return `<div id="div1">
        
            <img id="first" src="data:image/png;base64,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" alt="">
            <img id="second" src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png" alt="">     
       
           <p><a href="./index.html">Find jobs</a></p> 
            <p><a href="./companyreview.html"> Company reviews</a></p>
            <p><a href="./salary.html">Salary Guide</a></p>
    
         </div>
    
    <div id="div2">
    <img id="profile" src="https://screenshots.imgix.net/mui-org/material-ui-icons/person-rounded/~v=3.9.2/fb485bcf-3b2f-4190-a955-5b70109066d6.png?ixlib=js-1.2.0&s=0d2f8bb9a5a829be11a6f68e0b625dd0&w=300&h=200&fit=fillmax&fm=webp" alt="">
    <p><a href="">Employers/Post jobs</a></p>

    </div>`
}

export {navbar,signin_navbar}