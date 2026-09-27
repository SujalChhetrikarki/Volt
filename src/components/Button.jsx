export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
