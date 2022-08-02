type HelloProps = {
  name: string;
  massageCount?: number;
  isLoggedIn: boolean;
};

export const Hello = (props: HelloProps) => {
  const { massageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}, you have ${massageCount} messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
