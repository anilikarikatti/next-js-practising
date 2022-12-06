
import Image from "next/image"
import Link from "next/link"
export default function HelloWorldPrinting(){
    return (
        <>
        <h1> hello next js world</h1>
        <h1> <Link href="/"> back to home</Link> </h1>

        {/* <img src="/nature.jpg" /> */}

        <Image src="/nature.jpg" height={500} width={500}/>
        </>
    )
}
