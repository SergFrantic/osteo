import { Transition } from 'react-transition-group';
import { useState, useRef } from 'react';

function Test() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={1000}>
        {state => (
          <div>asdfasf</div>
        )}
      </Transition>
      <button onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
export default Test