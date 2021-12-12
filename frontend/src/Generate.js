import { useEffect, useState } from "react";
const Generate = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((arr) => {
        setUrl(arr[0].url);
        setLoading(false);
      });
  };

  const vote = async (vote) => {
    await fetch("https://aydang.cis188.org/api/vote", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, vote }),
    });
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {loading ? (
        <div className="spinner-border text-primary" />
      ) : (
        <div>
          <img
            src={url}
            style={{ width: "400px" }}
            className="img-fluid m-2 rounded"
            alt="(no cats yet...)"
          />
          <br />
          {url && (
            <div className="d-flex justify-content-center">
              <button
                style={{ width: "100px" }}
                className="btn btn-dark mx-2 p-2 hover"
                onClick={() => {
                  vote(1).then(generate);
                }}
              >
                😻
              </button>
              <button
                style={{ width: "100px" }}
                className="btn btn-dark p-2 hover"
                onClick={() => {
                  vote(-1).then(generate);
                }}
              >
                😿
              </button>
            </div>
          )}
        </div>
      )}
      <br />
    </div>
  );
};

export default Generate;
