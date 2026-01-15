export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div className="size-12 flex items-center justify-center">
      <Component className="size-8 object-contain" />
    </div>
  );
};
