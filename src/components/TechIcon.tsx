export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <Component className="w-8 h-8 max-w-full max-h-full object-contain" />
    </div>
  );
};
