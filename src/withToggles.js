import React, { useState } from "react";

function withToggles(WrappedComponent) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;
    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div>
        <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        <div>
          {isOpen && <WrappedComponent {...props} items={displayItems} />}
        </div>
        {isOpen && (
          <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
            {isCollapsed ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    );
  };
}

export default withToggles;
