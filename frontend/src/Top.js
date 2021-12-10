import { useEffect, useState } from "react";
const Top = () => {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/top")
      .then((res) => res.json())
      .then(({ top }) => {
        setTop(top);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="spinner-border text-primary" />
  ) : (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>top anime girls:</h1>
      {top ? (
        <div>
          {top.map(({ url, votes }, i) => (
            <>
              <h4>
                {i + 1}. With {votes} vote{Math.abs(votes) !== 1 && "s"}
              </h4>
              <img
                src={url}
                key={url}
                alt="..."
                style={{ height: "250px" }}
                className="img-fluid mb-2"
              />
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
