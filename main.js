document.querySelector('#pdffile').addEventListener('change',()=>{
    
    let pdffile = document.querySelector('#pdffile').files[0];
    let pdffileUrl = URL.createObjectURL(pdffile);
    
    document.querySelector('#vista').setAttribute('src',pdffileUrl);
})











