import '../stylesheets/code-examples.style.css';

const searchBox = (
  <div className="code-block">
    <div>
      <span className="keyword">import</span>
      <span className="operator"> React,</span>
      <span> {`{`}</span>
      <span className="operator"> Component </span>
      <span> {`}`}</span>
      <span> from</span>
      <span className="string"> 'react'</span>
    </div>
    <div>
      <span className="keyword">import</span>
      <span className="operator"> IconButton</span>
      <span> from</span>
      <span className="string"> '@mui/material/IconButton'</span>
    </div>
    <div>
      <span className="keyword">import</span>
      <span className="operator"> CodeIcon</span>
      <span> from</span>
      <span className="string"> '@mui/icons-material/Code'</span>
    </div>
    <div>
      <span className="keyword">import</span>
      <span className="string">
        {' '}
        '../../../assets/stylesheets/SearchBox.styles.css'
      </span>
    </div>
    <br />
    <div>
      <span className="keyword">export</span>
      <span className="declaration"> class</span>
      <span className="component"> SearchBox</span>
      <span className="declaration"> extends</span>
      <span className="component"> Component</span>
      <span> {`{`}</span>
      <br />
      <span className="declaration ml1">constructor</span>
      <span className="function"> {`(`}</span>
      <span className="function mr1"> {`)`}</span>
      <span className="string">{`{`}</span>
      <br />
      <span className="declaration ml2">super</span>
      <span className="function"> {`(`}</span>
      <span className="function mr1"> {`)`};</span>
      <br />
      <br />
      <span className="declaration ml2">this</span>
      <span>.</span>
      <span className="operator">state</span>
      <span className="ml0 mr0"> = </span>
      <span className="string">{`{`}</span>
      <br />
      <span className="operator ml3">codeModal: </span>
      <span className="declaration">true</span>
      <span>,</span>
      <br />
      <span className="string ml2">{`}`}</span>;
      <br />
      <span className="string ml1">{`}`}</span>
    </div>
    <br />
    <div>
      <span className="function ml1"> render</span>
      <span className="function"> {`(`}</span>
      <span className="function mr1"> {`)`}</span>
      <span className="string">{`{`}</span>
      <br />
      <span className="declaration ml2 mr0">const</span>
      <span className="function">showCodeModalHandler</span>
      <span className="ml0 mr0"> = </span>
      <span className="function">
        {' '}
        {`(`} {`)`}{' '}
      </span>
      <span className="declaration ml0 mr0">={'>'}</span>
      <span className="string ml0">{`{`}</span>
      <br />
      <span className="declaration ml3">this</span>
      <span>.</span>
      <span className="function">setState</span>
      <span className="function">(</span>
      <br />
      <span className="brace ml4">{`(`}</span>
      <span className="operator">prevState</span>
      <span className="brace">{`)`}</span>
      <span className="declaration ml0 mr0"> ={'>'}</span>
      <span className="brace ml0">{`(`}</span>
      <span className="function">{` {`}</span>
      <br />
      <span className="operator ml5 mr0">codeModal: </span>
      <span>!</span>
      <span className="operator">prevState</span>
      <span>.</span>
      <span className="operator">codeModal</span>
      <span>,</span>
      <br />
      <span className="function ml4">{`}`}</span>
      <span className="brace">{`)`}</span>
      <span>,</span>
      <br />
      <span className="brace ml4">
        {`(`} {`)`}
      </span>
      <span className="declaration ml0 mr0"> ={'>'}</span>
      <span className="function">{` {`}</span>
      <br />
      <span className="comment ml5">{`// console.log`}</span>
      <span className="brace">{`(`}</span>
      <span className="comment">this.state.codeModal</span>
      <span className="brace">{`)`}</span>
      <span className="comment">;</span>
      <br />
      <span className="function ml4">{`}`}</span>
      <br />
      <span className="string ml3">{`)`}</span>
      <span>;</span>
      <br />
      <span className="string ml2">{`}`}</span>
      <span>;</span>
      <br />
      <span className="keyword ml2 mr0">return </span>
      <span className="function">{`(`}</span>
      <br />
      <span className="tag ml3"> {`<`}</span>
      <span className="declaration">div</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="tag ml4"> {`<`}</span>
      <span className="declaration">div </span>
      <span className="operator">className </span>
      <span className="string"> "search-box-container"</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="tag ml5"> {`<`}</span>
      <span className="declaration">input </span>
      <br />
      <span className="operator ml6">className</span>
      <span>=</span>
      <span className="string">{`{`}`search-box </span>
      <span className="interpolation">$</span>
      <span className="function">{`{`}</span>
      <span className="declaration">this</span>
      <span>.</span>
      <span className="props">props</span>
      <span>.</span>
      <span className="operator">className</span>
      <span className="function">{`}`}</span>
      <span className="string">`{`}`}</span>
      <br />
      <span className="operator ml6">type</span>
      <span>=</span>
      <span className="string">"search"</span>
      <br />
      <span className="operator ml6">placeholder</span>
      <span>=</span>
      <span className="string">{`{`}</span>
      <span className="declaration">this</span>
      <span>.</span>
      <span className="props">props</span>
      <span>.</span>
      <span className="operator">placeholder</span>
      <span className="string">{`}`}</span>
      <br />
      <span className="tag ml5">{'/>'}</span>
      <br />
      <span className="tag ml5">{'<'}</span>
      <span className="component">IconButton</span>
      <br />
      <span className="operator ml6">className</span>
      <span>=</span>
      <span className="string">"code snippet"</span>
      <br />
      <span className="operator ml6">color</span>
      <span>=</span>
      <span className="string">"primary"</span>
      <br />
      <span className="operator ml6">onClick</span>
      <span>=</span>
      <span className="string">{`{`}</span>
      <span className="brace"> {`(`}</span>
      <span className="brace mr0"> {`)`}</span>
      <span className="declaration">={'>'} </span>
      <span className="function ml0">{`{`}</span>
      <span className="function ml0">{`}`}</span>
      <span className="string ml0">{`}`}</span>
      <br />
      <span className="tag ml5">{'>'}</span>
      <br />
      <span className="tag ml6">{'<'}</span>
      <span className="component">CodeIcon </span>
      <span className="operator">color</span>
      <span>=</span>
      <span className="string">"primary" </span>
      <span className="tag ml0">{'/>'}</span>
      <br />
      <span className="tag ml5">{'</'}</span>
      <span className="component">IconButton</span>
      <span className="tag">{'>'}</span>
      <br />
      <span className="tag ml4"> {`</`}</span>
      <span className="declaration">div</span>
      <span className="tag">{'>'}</span>
      <br />
      <span className="tag ml4"> {`<`}</span>
      <span className="declaration">div</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="tag ml5">{'<'}</span>
      <span className="component">Collapse</span>
      <br />
      <span className="operator ml6">in</span>
      <span>=</span>
      <span className="string">{`{`}</span>
      <span className="declaration">this</span>
      <span>.</span>
      <span className="operator">state</span>
      <span>.</span>
      <span className="operator">codeModal</span>
      <span className="function">{`}`}</span>
      <span className="string">`{`}`}</span>
      <br />
      <span className="operator ml6">timeout</span>
      <span>=</span>
      <span className="string">{`{`}</span>
      <span className="number">800</span>
      <span className="string">{`}`}</span>
      <br />
      <span className="operator ml6">collapsedSize</span>
      <span>=</span>
      <span className="string">{`{`}</span>
      <span className="number">0</span>
      <span className="string">{`}`}</span>
      <br />
      <span className="tag ml5">{`>`}</span>
      <br />
      <span className="string ml6">{`{`}</span>
      <span className="dynamic">searchBox</span>
      <span className="string">{`}`}</span>
      <br />
      <span className="tag ml5">{'</'}</span>
      <span className="component">Collapse</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="tag ml4"> {`</`}</span>
      <span className="declaration">div</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="tag ml3"> {`</`}</span>
      <span className="declaration">div</span>
      <span className="tag ">{`>`}</span>
      <br />
      <span className="function ml2"> {`);`}</span>
      <br />
      <span className="string ml1">{`}`}</span>
      <br />
      <span className="function">{`}`}</span>
    </div>
    <br />
    <div>
      <span className="keyword">export </span>
      <span className="keyword">default </span>
      <span className="component">SearchBox </span>;
    </div>
  </div>
);

export { searchBox };
