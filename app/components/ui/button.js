
export function Button({ children, ...props }) {
    return (
      <button {...props} className={`rounded px-4 py-2 ${props.className}`}>
        {children}
      </button>
    );
  }