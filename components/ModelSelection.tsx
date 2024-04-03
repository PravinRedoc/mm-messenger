'use client'
import React from 'react'
import Select from "react-select"
import useSWR from 'swr'

const fetchModels = () => fetch('/api/getEngines').then((res) =>res.json())

const ModelSelection = () => {
    const {data: models,isLoading} = useSWR('models', fetchModels)
    const {data: model, mutate:setModel}= useSWR('model',{
        fallbackData: 'gpt-3.5-turbo-1106'

    })
  return (
    <div className='mt-2'>
        <Select
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isLoading ={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"
        }}
        />
    </div>
  )
}

export default ModelSelection