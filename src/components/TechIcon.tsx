export const TechIcon = ({component}: {component: React.ElementType}) => {
    const Component = component;
    return <>
        <Component className="size-10" />
        <svg className="size-0 absolute">
        </svg>
        </>;
}
