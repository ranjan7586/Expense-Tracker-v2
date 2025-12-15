import Button from './Button';

const ActionButton = (props: React.ComponentProps<typeof Button>) => {
    return <Button variant="primary" {...props} />;
};

export default ActionButton;
