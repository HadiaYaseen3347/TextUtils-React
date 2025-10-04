export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743'
  };

  // Custom CSS to fix arrow colors and directions
  const customAccordionStyle = `
    .accordion-button::after {
      filter: ${props.mode === 'dark' ? 'invert(1)' : 'invert(0)'};
      transform: rotate(0deg) !important; /* Default: all downward */
    }
    .accordion-button:not(.collapsed)::after {
      transform: rotate(180deg) !important; /* Up when open */
    }
  `;

  return (
    <div
      className='container'
      style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
    >
      <style>{customAccordionStyle}</style>

      <h1 className='my-3'>About Us</h1>

      <div className="accordion" id="accordionExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Smart Text Analysis
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils helps you understand your writing instantly — count words, characters, and even estimate reading time. It’s designed to give quick, reliable insights about your text.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Fast & Secure
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              All processing happens right in your browser — no data is sent to any server. Your text stays private, and results appear immediately.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Multi-Platform Support
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils runs smoothly on any modern browser — Chrome, Edge, Safari, or Firefox — and works perfectly on mobile devices, tablets, and desktops alike..
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
