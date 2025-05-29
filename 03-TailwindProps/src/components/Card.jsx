import React from 'react'

function Card({username="Mahto", post = "Not Assigned Yet"}) {
    
    return (
        <div className="flex flex-col items-center w-2xs  p-7 rounded-2xl  bg-zinc-800 my-5">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
            <div className="flex items-center flex-col">
                <span className="text-2xl font-medium text-white">{username}</span>
                <span className="font-medium text-sky-500">{post}</span>
                <span className="flex gap-2 font-medium text-gray-400 dark:text-gray-400">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div>
    )
}

export default Card