import React from 'react'
import ButtonExamples from './components/ButtonExamples';

const Buttons = (props) => {
  return (
    <article>
      <section>
        <h1>Button</h1>
      </section>
      <section>
        <p>To trigger an option</p>
        <h2 id="when-to-use">When To Use</h2>
        <p>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</p>
      </section>
      <h2>Examples</h2>
      <ButtonExamples />
    </article>
  );
}

export default Buttons;
