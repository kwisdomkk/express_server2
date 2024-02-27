import Notice from "../models/notice";

export const noticeList=async(req,res)=>{
  try{
    const data = await Notice.find({});  
    return res.send({name:"list",data});
  }catch(error){
    console.log(error);
  }
};
export const noticeWrite=async(req,res)=>{
  try{
    // console.log(req.body)
    const{title,description,writer}=req.body;

    const data= await Notice.create({
      title,
      description,
      createdAt: Date.now(),
      writer,
    });

    return res.send({result:true,data:data})
  }catch(error){
    console.log(error)
    return res.send({result:false})
  }
};
export const noticeDetail=async(req,res)=>{
  const{
    params:{id},
  }=req;
  // const id=req.params.id;
  try{
    const data= await Notice.findById(id)
    return res.send({name:"detail",data:data})
  }catch(error){
    console.log(error)
  }
};
export const noticeEdit=(req,res)=>res.send({name:"edit"});
export const noticeDelete=(req,res)=>res.send({name:"delete"});
