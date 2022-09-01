import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { Avatar } from './avatar';
import styles from './comment.module.css';

export function Comment(){
return(
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/Filipe-Pirata.png" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
        <div className={styles.authorAndTime}>
          <strong>Paulo Ferreira</strong>
          <time title='24 de agosto de 2022' dateTime='2022-08-24'>cerca de 1h atrás</time>
        </div>
        <button title="Deletar comentario">
       <Trash size={24} />
        </button>

        </header>
        <p>Muito bom, parabéns!!</p>

      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>

        </button>
      </footer>
    </div>
  </div>

)

}