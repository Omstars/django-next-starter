import Head from 'next/head'
import styles from '../styles/Home.module.css'

 const Home = ({users, errors}) => {
  
  console.log(users, errors)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sample Application
        </h1>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  let  users, errors = []
  try {
    const userRequest = await fetch('http://backend:8000/api/users')
    users = await userRequest.json()
  } catch(e) {
    errors.push(e)
  }

  return { users,errors }
}

export default Home
