import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
    title,
    size = 'medium',
    shape = 'rounded-md',
    variant = 'primary'
}) => {
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    };

    return (
        <button
            className={`
        ${sizeClasses[size]}
        ${shape}
        ${variantClasses[variant]}
        transition-colors
        font-medium
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      `}
        >
            {title}
        </button>
    );
};

export default Button;
