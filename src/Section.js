import { useContext, useRef, useEffect } from 'react';
import { ScrollContext } from './ScrollProvider';

const Section = ({ id, children }) => {
  const ref = useRef(null);
  const { sectionRefs } = useContext(ScrollContext);

  useEffect(() => {
    sectionRefs.current[id] = ref;
    return () => {
      delete sectionRefs.current[id];
    };
  }, [id, sectionRefs]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
