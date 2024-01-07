import keyConceptsImage from '../../assets/images/key-concepts.png';

function Concept({title, image, description}) {


    return (
        <div>
        <header>
          <img src={keyConceptsImage} alt="Medal badge with a star" />
          <h1>Key React Concepts</h1>
          <p>Selected key React concepts you should know about</p>
        </header>
        <ul id="concepts">
          <li className="concept">
            <img src="TODO: IMAGE" alt="TODO: TITLE" />
            <h2>TODO: TITLE</h2>
            <p>TODO: DESCRIPTION</p>
          </li>
        </ul>
      </div>
      );

}

export default Concept


