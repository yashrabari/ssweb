import React from 'react'
import tw from 'twin.macro'

export default function Button({ children }: any) {
    return (
        <ButtonComponent>{children}</ButtonComponent>
    )
}




const ButtonComponent = tw.button`
    bg-primary-500
    px-5
    py-2
    rounded
    text-white
    text-sm
`