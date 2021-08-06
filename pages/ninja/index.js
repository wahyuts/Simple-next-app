import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

// fetching data di next js

export const getStaticProps = async () => {  // fetching ada pake fungsi ini di next js,..nama fungsi tidak bisa diganti,..pake async await juga

    const res = await fetch ('https://jsonplaceholder.typicode.com/users') // fetching json di simpan di var res,..tapi jsonnya belum bisa langsung digunakan
    const data = await res.json();  // data json dari var res di assign ke var data agar json nya bisa dipake

    return {  // harus pake return di fungsi ini dengan return mengembalikan object json data nya agar data bisa keluar
        props: { ninjas: data} 
    }

}

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Ninja in here</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninja/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;