import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './app.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Filipe-Pirata.png',
      name: 'Filipe Azevedo',
      role: 'Frontend Developer'
    },
    content: [
    { type: 'paragraph', content:  'Fala Galera'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto me meu portifolio'},
    { type:'link', content:  'jane.design/doctorcare'}
      
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @rocketseat'
    },
    content: [
    { type: 'paragraph', content:  'Fala Galera'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto me meu portifolio'},
    { type:'link', content:  'jane.design/doctorcare'}
      
    ],
    publishedAt: new Date('2022-05-10 10:00:00'),
  },
]

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}><aside>
        <Sidebar />
      </aside>
      <main>
        {posts.map(post => {
          return (
          <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
        })}
        
      </main>
      </div>
      </div>

    
   
  )
}


