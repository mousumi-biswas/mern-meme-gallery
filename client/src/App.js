

import React, {useState, useEffect} from 'react';
import './App.css';
import { DeleteOutlined} from '@ant-design/icons'
import SingleFileUpload from './components/SingleFileUpload';
import {getSingleFiles, removeFile} from './functions/singleFile';

function App() {
  const [singleFiles, setSingleFiles] = useState([]);


  const getSingleFileslist = async () => {
    try {
        const fileslist = await getSingleFiles();
        setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }

 
 
  useEffect(() => {
    getSingleFileslist();
   
  }, []);

    const handleRemove = (id) => {
        let answer = window.confirm("Delete?")
        if(answer) {
            //console.log("Send delete request", slug)
            removeFile(id)
            .then((res)=>{
                getSingleFileslist()
               // toast.error(`${res.data.title} is deleted`)

            })
            .catch((err)=>{
                if(err.response.status===400) console.log(err.response.data)
            })
        }
    }



  return (
    <>
        <div className="container">
          <h3 className="text-danger font-weight-bolder border-bottom text-center mt-5">File Upload Using MERN Stack </h3>
          <SingleFileUpload getsingle={() => getSingleFileslist()} />
       </div> 
       <div className="container mt-5">
         <div className="row">
           <div className="col-md-12 ">
             <h4 className="text-success text-center font-weight-bold">Meme Gallery</h4>
             <div className="row ">
                {singleFiles.map((file, index) => 
                  <div className="col-md-4 ">
                    <div className="card mb-2 border-0 p-0 mt-5 ">
                      <img src={`http://localhost:8000/${file.filePath}`} height="200"  className="card-img-top img-responsive border" alt="img"/>
                      </div>
                       <DeleteOutlined className="text-danger " onClick={()=> handleRemove(singleFiles.id)}  />
                  </div>
                )}
         

             </div>
              
           </div>
          
         </div>
       </div>
    </>
  );
}

export default App;
