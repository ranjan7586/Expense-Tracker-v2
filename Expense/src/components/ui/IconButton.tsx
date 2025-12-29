import Button from './Button';

const IconButton = (
  props: React.ComponentProps<typeof Button>
) => {
  return (
    <Button
      variant="ghost"
      className="p-2 rounded-lg"
      {...props}
    />
  );
};

export default IconButton;
