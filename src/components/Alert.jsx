import Alert from "react-bootstrap/Alert";

const Alerta = ({ result }) => {
  return (
    <Alert
      className="m-5 p-3"
      key = {result.variant}
      variant = {result.variant}
      
    >
      {result.msg}
    </Alert>
  );
};

export default Alerta;

