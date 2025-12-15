import Button from './Button';

interface ToggleButtonProps {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}

const ToggleButton = ({
    active,
    onClick,
    icon,
    label,
}: ToggleButtonProps) => {
    return (
        <Button
            onClick={onClick}
            variant={active ? 'primary' : 'ghost'}
            icon={icon}
        >
            {label}
        </Button>
    );
};

export default ToggleButton;
