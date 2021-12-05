import { useEffect, useState } from "react";
const Top = () => {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:3000/api/top")
    //   .then((res) => res.json())
    //   .then(({ top }) => {
    //     setTop(top);
    //   });
  }, []);

  return (
    <div className="container-fluid">
      <h1>The top waifus are:</h1>
      {top ? (
        <div>
          {top.map(({ key, value }) => (
            <>
              <img src={key} key={key} alt="..." />
              <br />
            </>
          ))}
        </div>
      ) : (
        <div className="spinner-border text-primary" />
      )}
    </div>
  );
};

export default Top;
