function run(){
let htmlCode = document.getElementById('html-code').value;
let cssCode = "<style>"+document.getElementById('css-code').value+"</style>";
let jsCode = document.getElementById('js-code').value;
let output = document.getElementById('output');
output.contentDocument.body.innerHTML = htmlCode+cssCode;
output.contentWindow.eval(jsCode);
(function(){
    if(htmlCode == '<'){
        document.getElementById("html-code").value=` <></>`
    }
    if(htmlCode == 'html'){
     document.getElementById("html-code").value=`
     <!DOCTYPE html>
     <html lang="en">
     <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
     </head>
     <body>
        
     </body>
     </html>
     `
    }

}())

}
document.getElementById('html-code').addEventListener("keyup",run);
document.getElementById('css-code').addEventListener("keyup",run);
document.getElementById('js-code').addEventListener("keyup",run);

alert('قم بالنزول لاسفل لتشاهد نتيجه الكود')