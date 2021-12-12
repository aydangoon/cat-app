import { useEffect, useState } from "react";
const Top = () => {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(null);

  useEffect(() => {
    fetch("https://aydang.cis188.org/api/top")
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
      <h1>top cats</h1>
      {top ? (
        <div>
          {top.map(({ url, votes }, i) => (
            <div className="d-flex justify-content-center align-items-center">
              <h4>{i + 1}.</h4>
              <img
                src={url}
                key={url}
                alt="..."
                style={{ width: "200px" }}
                className="mx-2 img-fluid mb-2 rounded"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="spinner-border text-primary" />
      )}
    </div>
  );
};

export default Top;
