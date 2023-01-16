


export const formatDate=(date)=>
{
     const hours=new Date(date).getHours();
     const minutes=new Date(date).getMinutes();
      const newformat = hours >= 12 ? 'PM' : 'AM'; 
                
    return `${hours < 10?'0' + hours : hours}:${minutes<10?'0' + minutes : minutes}  ${newformat}`
     
}

export const downloadMedia=(e, originalImage)=>
{
       e.preventDefault();
       try {
             fetch(originalImage)
             .then(resp=>resp.blob())
             .then(blob=>{
                const url= window.URL.createObjectURL(blob);
                const a= document.createElement('a');
                a.style.display="none";
                a.href = url;

            const nameSplit=originalImage.split("/");
            const duplicateName = nameSplit.pop();

              a.download = "" + duplicateName + "";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

             }).catch(error=>console.log('Error while downloading the image',error.message));
       }catch(error)
       {
           console.log('Error while downloading the image',error.message);
       }
}