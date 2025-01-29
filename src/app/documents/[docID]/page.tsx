import Editor from "./editor";


interface DocumentIdPageProps{
    params:Promise<{docID:string}>;
}




const DocumentId =async({params}:DocumentIdPageProps)=>{
    const awaitedParams=await params;
    const docID=awaitedParams.docID;
    return (
        <div>
            
            <Editor/>

        </div>
    );
} 
export default DocumentId;