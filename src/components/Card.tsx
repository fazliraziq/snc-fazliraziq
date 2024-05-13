import { User } from '@/utils/common/person';
import { LogContext } from '@/utils/helper/EnableLogContext';
import axios, { CancelTokenSource } from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'

type CardProp = {
  username : string
}
const Card = (props : CardProp) => {
    
    const [currentRequest, setCurrentRequest] = useState<CancelTokenSource | null>(null);
    const [data , setData] = useState<User>();
    const context = useContext(LogContext);

    useEffect(() => {
        console.log('card component is rending!');
        props.username && handleApi();
    },[props.username]);

    const handleApi = async () => {
        if (currentRequest) {
          currentRequest.cancel();
        }
        const cancelTokenSource = axios.CancelToken.source();
        setCurrentRequest(cancelTokenSource);
        try {
          const response = await axios.get(`api/person?person=${props.username}`, {
            cancelToken: cancelTokenSource.token,
          });
          console.log('Consoling works : ', response.data)
          setData(response.data);
    
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('error cancelling the request!');
          }
        }
      };

    return (
       <div className="w-[400px] rounded-lg shadow-md overflow-hidden">
        {  data && ( 
         <>
            <div className="relative h-128 bg-cover bg-no-repeat" style={{ backgroundImage: data?.backgroundImageUrl }}>
                <Image src={data?.profilePictureUrl} alt={data?.name} width={400} height={400} className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out" />
                <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">{data?.name}</h3>
                <p className="text-gray-600">{data?.title}</p>
                <div className="flex items-center mt-4">
                    <span className="text-gray-500">followers : {data?.followers}</span>
                    <span className="text-gray-500 mx-2">·</span>
                    <span className="text-gray-500">following: {data?.following}</span>
                </div>
            </div>
            </div>
        </>
        )}
        </div>
      );
}

export default Card