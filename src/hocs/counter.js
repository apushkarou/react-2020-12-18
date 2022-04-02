import useAmount from '../hooks/useAmount';

export default (WrappedComponent) => {
  const HocComponent = ({ ...props }) => {
    const amountProps = useAmount(4);

    return <WrappedComponent {...props} {...amountProps} />;
  };

  return HocComponent;
};
