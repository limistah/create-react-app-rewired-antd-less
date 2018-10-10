import React from 'react';

const Docs = (props) => {
  const { match } = props;
  return (
    <section>
      {match.url}
      <br/>
      {match.path}
      This is the root of the
    </section>
  );
}

export default Docs
