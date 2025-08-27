import Link from 'next/link'
import Image from 'next/image'
import Coffee from '../../public/coffee.webp'

const Chanchitos = () => {
    return (
        <div>
            <Link href="/"> Ir a inicio </Link>
            <p> Chanchitos </p>
            {/* <Image src='/coffee.webp' width={400} height={400} /> */}
            <Image src={Coffee} width={400} height={400} />
        </div>
    ) 
}


export default Chanchitos