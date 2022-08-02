type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
  let message;

  switch (props.status) {
    case "loading":
      message = "Loading..";
      break;
    case "success":
      message = "SUCCESS";
      break;
    case "error":
      message = "ERROR";
      break;
    default:
      message = "No Message";
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
