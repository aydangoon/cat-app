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
    console.log("body", { url, vote });
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
            style={{ height: "500px" }}
            className="img-fluid mb-2"
            alt="(no anime yet...)"
          />
          <br />
          {url && (
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark mx-2"
                onClick={() => {
                  vote(1).then(generate);
                }}
              >
                😻
              </button>
              <button
                className="btn btn-light"
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
