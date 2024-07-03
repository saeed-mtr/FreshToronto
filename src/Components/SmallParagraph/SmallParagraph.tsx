import './SmallParagraph.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function SmallParagraph() {
  return (
    <>
      <div className='smallparagraph'>
        <p>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            Full cleaning service and full cooperation
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            Experienced Team
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            trusted by 100+ partners
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            you'll be treated with a fresh and good smelling house
          </li>
          <br />
          <h3>Book your preffered time now and let us take care of you.</h3>
        </p>
      </div>
    </>
  );
}
