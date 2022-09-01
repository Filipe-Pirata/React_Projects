import { Header } from './components/Header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './app.module.css'

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}><aside>
        <Sidebar />
      </aside>
      <main>
      <Post
      author="Filipe Azevedo"
      content="Essa é a primeira postagem." />
        
      </main></div>
      

    </div>

    
   
  )
}


