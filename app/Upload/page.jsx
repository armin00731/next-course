'use client'
import React ,{useState,useEffect}from 'react'
import { CldUploadWidget , CldImage} from 'next-cloudinary'

export default function Page() {
  const [publicId,setPublicId] = useState('')
  useEffect(()=>{
     console.log(publicId)
  },[publicId])
  return (
    <>
    <CldImage src={publicId} alt='uploaded image' width={350} height={200}/>
    <CldUploadWidget uploadPreset='uhai1p2i'
    options={{
      sources: [
        "local"
    ]
    }
    }
    onUpload={(result,widget)=>{
      console.log(result)
      if(result.event!=='success'){
         alert('file was not uploaded successfully')
      }else{
        setPublicId(result.info.public_id)
      }
    }}
    >
      {({open})=><button className='btn btn-primary' onClick={()=>open()}>button</button>}
    </CldUploadWidget>
    </>
  )
}

