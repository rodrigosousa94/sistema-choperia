import styles from './page.module.scss'
import LogoImg from '../../public/logo.png'
import Image  from 'next/image'
import Link from 'next/link'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'

export default function Page(){

  async function handleLogin(formData: FormData){
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")

    if(email === "" || password === ""){
      return
    }

    try {
      const response = await api.post("/session", {
        email,
        password
      })

      if(!response.data.token){
        return
      }
      
    } catch (err) {
      console.log("Error " + err)
      return
    }

    redirect('/dashboard')
  }

  return(
    <>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} className={styles.logo} width={350} alt="logo"/>
      
      <section className={styles.login}>
        <form action={handleLogin}>
          <input className={styles.input} type="email" required name='email' placeholder='Digite seu email'/>
          <input className={styles.input} type="password" required name='password' placeholder='***********'/>
          <button type='submit' className={styles.button}>Acessar</button>
        </form>

        <Link className={styles.text} href="/signup">Não possui uma conta? Cadastre-se aqui!</Link>
      </section>
      </div>
    </>
  )
}