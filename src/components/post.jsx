import { Avatar } from './avatar';
import { Comment } from './comment';
import styles from './post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Filipe-Pirata.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Filipe Pirata</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='24 de agosto de 2022' dateTime='2022-08-24'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>Acabei de subir mais um projeto me meu portifolio</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
        <a href="">#novoprojeto </a>{' '}
        <a href="">#nlw </a>{' '}
        <a href="">#rocketseat</a></p>
      </div>
    <form className={styles.commentForm}>
      <strong>Deixe seu comentario</strong>
      <textarea placeholder='Deixe um comentário'></textarea>
      <footer><button type='submit'>Publicar</button></footer>
      
    </form>
      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />

      </div>

    </article>

  )
}