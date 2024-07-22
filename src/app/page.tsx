"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useState } from "react";

export default function Home() {

  const [alert, setAlert] = useState(false)

  function handleClick() {
    setAlert(!alert)

  }


  return (
    <div className="flex flex-col justify-center mt-4 items-center">
      <Button onClick={handleClick} className="bg-blue-500/25 p-2 rounded-xl w-[300px] ">Bruno</Button>
      {alert && (
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
          className="bg-green-500/25 text-green-900"
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Our team will get back to you soon.
          </AlertDescription>
        </Alert>
      )}
    </div>
    
  )
}
