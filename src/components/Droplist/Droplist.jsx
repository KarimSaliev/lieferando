import React, {useState} from 'react'
import styles from './Droplist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
function Droplist(props) {
    const [isActive, setActive] = useState(false);
    const [selected, setSelected] = useState(props.name);

  return (
    <div className={styles['droplist']}>
        <FontAwesomeIcon icon={faCaretUp} className={isActive? styles['active']: styles['icon']} onClick={e=>setActive(!isActive)}/>
        <div className={styles['droplist_btn']} onClick={e=>setActive(!isActive)}>{selected}</div>
        
        {isActive && (
             <div className={styles['droplist_content']}>
             {props.list.map((item,index)=>{
                 return(
                     <div key={index} className={styles['droplist_item']} onClick={e=>{setSelected(item);setActive(false);}}>
                         {item}
                     </div>
                 )
             })}
         </div>
        )}
       
      
    </div>
  )
}

export default Droplist
